/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class SalaryGuard implements CanActivate{

    public key : string = "hsgdficsyu7nchagixsdsdg5df9g4sf56bdf1b489fd4b";
    canActivate(context: ExecutionContext): boolean {
      
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        if(req.header( "key")===undefined)return false;
        return req.header("key")===this.key;
    }
    
}