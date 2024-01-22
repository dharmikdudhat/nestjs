/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportlocalStrategy } from './passport.local.sttrategy';
import { UserModule } from 'src/users/users.module';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportlocalStrategy],
})
export class AuthModule {}
