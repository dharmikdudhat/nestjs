/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';



@Controller('/users')
export class UsersController {

    constructor(private UserService:UserService){}

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
   this.UserService.addUser(createUserDto);
    return 'User created successfully';
  }

//   @Get()
//   getUsers() {
    
//   }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.UserService.getUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    this.UserService.getUser(id);
    return 'user updated successfully';
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.UserService.deleteUser(id);
    return 'user deleted successfully';
  }
}
