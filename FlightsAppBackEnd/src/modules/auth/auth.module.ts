import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt'

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Users } from './entities/user.entity';
import {AuthGuard} from './guards/auth.guard';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      global:true,
      secret:process.env.JWT_SEED,
      signOptions:{expiresIn:'6h'},
    })
    
  ],
  exports:[TypeOrmModule,AuthGuard,AuthService],
  controllers: [AuthController],
  providers: [AuthService,AuthGuard],
})
export class AuthModule {}
