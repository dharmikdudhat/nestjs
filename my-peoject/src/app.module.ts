/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { UsersController } from './users.controller';
import { AlbumsController } from './album.controller';

@Module({
  controllers: [UsersController , AlbumsController],
})
export class AppModule {}
