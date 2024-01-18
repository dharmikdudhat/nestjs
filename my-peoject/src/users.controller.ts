/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { Subject } from 'rxjs';

@Controller('/users')
export class UsersController {
  constructor(@Inject('event_store') private event: Subject<any>) {
    console.log(this.event);
  }
}
