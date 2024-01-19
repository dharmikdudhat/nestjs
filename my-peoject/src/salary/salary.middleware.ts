/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class salaryMiddleware implements NestMiddleware{

    use(req:Request,res:Response,next:NextFunction){
        throw new Error ("method not done");
        next();
    }
}