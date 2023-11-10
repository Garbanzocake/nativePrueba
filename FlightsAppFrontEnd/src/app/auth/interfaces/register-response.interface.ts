import { User } from "./user.interface";

export interface RegisterReponse {
  user:  User;
  token: string;
}

