import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

import { CreateUserDto, UpdateAuthDto, LoginDto, RegisterUserDto } from './dto';

import { Users as User } from './entities/user.entity';
import { LoginResponse } from './interfaces/login-response';
import { JwtPayload } from './interfaces/jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password, ...userData } = createUserDto;

      //1 Encriptar password
      const newUser = this.usersRepository.create({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
      });

      //Guardar Usuario
      await this.usersRepository.save(newUser);

      const { password: _, ...user } = newUser;

      return user;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new BadRequestException(`${createUserDto.email} already exists!`);
      } else {
        throw new InternalServerErrorException('Something Happened!');
      }
    }
  }
  //Para usuarios externos
  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
    const user = await this.create(registerUserDto);

    return {
      user: user,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;
    const user = await this.usersRepository.findOneBy({ email });

    if (!user) {
      throw new UnauthorizedException('Not Valid Credentials-Email');
    }
    //Comparar password
    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Not Valid Credentials- password');
    }

    const { password: _, ...rest } = user;

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findUserById(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    const { password, ...rest } = user;

    return rest;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
