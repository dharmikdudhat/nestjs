/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { ServicesService } from '../services/services.service';
import { Request, Response } from 'express';

@Controller('controllers')
export class ControllersController {
    constructor(private servicesService:ServicesService){}

    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id : number,@Req() req : Request,@Res() res : Response){
        console.log();
        
        const customer =  this.servicesService.findCustomerById(id);

        if(customer){
            res.send(customer);
        }else{
            res.status(200).send("customer not found");
        }
    }
}
