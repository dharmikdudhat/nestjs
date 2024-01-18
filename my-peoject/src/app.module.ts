/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { UsersController } from './users.controller';
import { AlbumsController } from './album.controller';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = true;
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [
    {
      provide: 'event_store',
      useFactory: () => {
        const event = IS_DEV_MODE
          ? new ReplaySubject(2)
          : new BehaviorSubject(null);

        return event;
      },
    },
  ],
})
export class AppModule {}
