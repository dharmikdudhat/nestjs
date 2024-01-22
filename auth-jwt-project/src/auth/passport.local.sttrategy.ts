/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from '../users/user.service';
import { User } from "src/users/user.entity";

@Injectable()
export class PassportlocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super();
    }

    validate(username: string, password: string): User {
        const user: User = this.userService.getUserByName(username);
        if (user == undefined) throw new UnauthorizedException();
        if (user != undefined && user.password == password) {
            return user;
        }
        else {
            throw new UnauthorizedException();
        }
    }
}