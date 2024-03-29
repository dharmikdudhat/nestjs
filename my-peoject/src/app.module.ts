/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { UsersController } from './users/controllers/users.controller';
import { AlbumsController } from './users/controllers/album.controller';
import { UserService } from './users/services/user.service';
import { UserModule } from './users/users.module';
import { SalaryModule } from './salary/salary.module';
import { WorkModule } from './work/work.module';
import { DonModule } from './don/don.module';

@Module({
  imports:[UserModule, SalaryModule, WorkModule, DonModule],
  controllers: [UsersController, AlbumsController],
  providers: [UserService],
})
export class AppModule {}
