/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "User1",
            password: "admin1",
            email: "test1@gmail.com"
        },
        {
            username: "User2",
            password: "admin2",
            email: "test2@gmail.com"
        },
        {
            username: "User3",
            password: "admin3",
            email: "test3@gmail.com"
        },
        {
            username: "User4",
            password: "admin4",
            email: "test4@gmail.com"
        },

    ];

    getUserByName(userName:string):User{
        return this.users.find((user)=>user.username === userName)
    }
}