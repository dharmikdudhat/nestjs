/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
