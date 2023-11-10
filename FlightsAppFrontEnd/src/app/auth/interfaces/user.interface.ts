export interface User {
  id:        number;
  email:     string;
  firstName: string;
  lastName:  string;
  isActive:  boolean;
}

export interface RegisterUser{
  email:string;
  password:string;
  firstName:string;
  lastName:string;


}
