/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportlocalStrategy } from './passport.local.sttrategy';
import { UserModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'key',
    signOptions: { expiresIn: '60s' }
  })],
  controllers: [],
  providers: [PassportlocalStrategy, AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule { }
