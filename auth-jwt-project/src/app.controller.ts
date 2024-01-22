/* eslint-disable prettier/prettier */
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './users/role.guard';
import { CONSTANTS } from './constants';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    //authentication
    const token = this.authService.generateToken(req.user);
    return token;
  }

  @Get("/android-developer")
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req): string {
    return "this is private data for android developer" + JSON.stringify(req.user);
  }

  @Get("/web-developer")
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request() req): string {
    return "this is private data for web developer" + JSON.stringify(req.user);
  }
}
