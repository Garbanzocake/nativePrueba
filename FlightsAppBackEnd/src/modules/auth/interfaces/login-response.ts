import {Users as User} from "../entities/user.entity";

export interface LoginResponse{
    user:User;
    token:string;
}