/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { UserSignInDto } from "./user-signin.dto";

export class UserSignUpDto extends UserSignInDto{

    @IsNotEmpty({message:'name can not be empty'})
    @IsString({message:'name should be string'})
    name:string;

}