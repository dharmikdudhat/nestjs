/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
@Module({
   imports:[ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [".local.env"],
  }),

  MongooseModule.forRoot(process.env.MONGO_URI),
    BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
