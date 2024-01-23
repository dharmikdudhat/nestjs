/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
// import { ConfigModule } from '@nestjs/config';


console.log("hsgcdjh");

@Module({
   imports:[
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mydb'),
    BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
