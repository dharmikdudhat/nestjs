/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get , Req } from '@nestjs/common';
import { Request } from 'express'; 

@Controller('/albums')
export class AlbumsController {
  @Get()
  async getProfile(@Req() req : Request) {

    console.log(req);
    return new Promise((resolve, reject) => {
      resolve({
        hello: 'dharmik',
      });
    });
  }
}
