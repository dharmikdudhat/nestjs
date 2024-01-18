/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { UsersController } from './users.controller';
import { AlbumsController } from './album.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserService],
})
export class AppModule {}
