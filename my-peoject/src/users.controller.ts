/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  Header,
  Redirect,
  Post,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Post('/profile')
  @Redirect('/users/account')
  async getProfile(@Req() req: Request, @Res() res: Response) {
    console.log(req);
    return new Promise((resolve, reject) => {
      res.json({
        hello: 'dharmik',
      });
    });
  }

  @Get('/account')
  redirectRoute() {
    return 'users/login';
  }
}
