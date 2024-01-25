/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class UserSignInDto{
    @IsNotEmpty({message:'email can not be empty'})
    @IsEmail({},{message:'please enter valid email'})
    email:string;

    @IsNotEmpty({message:"enter some password"})
    @MinLength(5,{message:'enter some more charatcters in password'})
    password:string;
}