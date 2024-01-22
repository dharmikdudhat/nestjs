//*there are two layers of server
//?1.controller :- controls all the request of the client using
//!request handlers controller have multiple request handlers
//?2.service layer:- provides a set of functions to perform operations on data.directly interect with databases

//*scopes
//?1.global
//?2.module
//?3.controller
//?4.request handler / route

//*types of modules
//?1.module with controllers
//?1.module without controllers

//*base module of nestjs applications is app module and using this only app module gets bootstraping using main.ts file

//*setting http status code and header
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import {
//     Controller,
//     Get,
//     Req,
//     HttpCode,
//     HttpStatus,
//     Res,
//     Header,
//     Redirect,
//     Post,
//   } from '@nestjs/common';
//   import { Request, Response } from 'express';

//   @Controller('/users')
//   export class UsersController {
//     @Post('/profile')
//     @Redirect('/users/account')
//     async getProfile(@Req() req: Request, @Res() res: Response) {
//       console.log(req);
//       return new Promise((resolve, reject) => {
//         res.json({
//           hello: 'dharmik',
//         });
//       });
//     }

//     @Get('/account')
//     redirectRoute() {
//       return 'users/login';
//     }
//   }

//*route parameters
// /* eslint-disable prettier/prettier */
// import { Controller , Get, Param } from "@nestjs/common";

// interface Videoparams  {
//  id : number;
//  name : string;
// }

// @Controller("/users")
// export class UsersController {
//     @Get("/videos/:id/:name")
//     getVideos(@Param() params : Videoparams){
//         console.log(params.name);

//         return 'Success';
//     }
// }

//!@Header - set responce header
//!@Headers - extarct request header

//*headers and query parameters that are after ? in link

// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { Controller , Get, Param ,Query ,Headers} from "@nestjs/common";

// interface Queryparams  {
//  age : number;
//  name : string;
// }

// @Controller("/users")
// export class UsersController {
//     @Get("/videos")
//     getVideos(@Headers() query : Record<string,any>){
//         console.log(query);

//         return 'Success';
//     }
// }

//*data body submission
// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { Body, Controller, Get, Post } from '@nestjs/common';

// interface videoDTO {
//     name: string;
//     date : Date;
// }

// @Controller('/users')
// export class UsersController {
//   @Post('/videos')
//   addVideo(@Body() requestData : videoDTO) {
//     console.log(requestData);

//     return { success: true };
//   }
// }

//*curd operation on user
// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     Post,
//     Put,
//   } from '@nestjs/common';
//   import { CreateUserDto } from './dto/create-user.dto';

//   let Users = [];

//   @Controller('/users')
//   export class UsersController {
//     @Post()
//     addUser(@Body() createUserDto: CreateUserDto) {
//       Users.push(createUserDto);
//       console.log(Users);

//       return 'User created successfully';
//     }

//     @Get()
//     getUsers() {
//       return Users;
//     }

//     @Get(':id')
//     getUser(@Param('id') id: number) {
//       return Users.find((user) => +user.id === +id);
//     }

//     @Put(':id')
//     updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
//       const userId = Users.findIndex((user) => +user.id === +id);

//       if (!userId) {
//         return;
//       }
//       Users[userId] = updateUserDto;
//       return "user updated successfully";
//     }

//     @Delete(':id')
//     deleteUser(@Param('id') id: number) {
//       Users = Users.filter((user) => +user.id !== +id);
//     }
//   }

//*subdomain
// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { Controller, Get } from '@nestjs/common';
// @Controller({path:'/users', host:"app.domain.com"})
// export class UsersController {
//  @Get()
//     getUsers(){
//         return "helloo world";
//     }
// }

//!ioc(inversion of control) approach - we are delegating control to nestjs runtime for instantiation and managing dependencies.
//!ioc container contains / stores all the instances of dependencies or providers instances.
//!@injectable() this decorator is used to make instances of any dependencies.
//!when ever any one needs any dependencies they do it through injection token.

//!types of providers
//? class based (standard) :- in this we inject the instances of classes
//?non class based :- in this we inject the number,boolean , string, object,array,function
//?factory type :- in this we inject factory function , async factory function

//!the dependencies that we need we can ask with an injection token either in the constructor or in property definition.
//!injection types
//?1. constructor injection :- we mention inside constructor
//?constructor(account : Account){...}
//?constructor(@inject(Account) account){...}

//?2. property injection :- we mention in property outside the constructor
//?class user{
//? @Inject(Account)
//?account:Account
//?....
//?}

//?ex
// import { Controller, Get , Optional} from '@nestjs/common';
// import { UserStore } from './users.store';
// @Controller({ path: '/users', host: 'app.domain.com' })
// export class UsersController {
//   constructor(@Optional() private store: UserStore) {
//     console.log(this.store);

//   }
// }

//in aap module
//@Module({
//     controllers: [UsersController , AlbumsController],
//     providers : [UserStore]
//   })

//user.store.ts
// /* eslint-disable prettier/prettier */
// import { Injectable } from "@nestjs/common";

// interface User {
//     name : string;
//     age : number;
//     id:number;
// }

// @Injectable()
// export class UserStore {
//     private store = new Map<number, User>();

//     addUser(user:User){
//         this.store.set(user.id,user);
//     }

//     getUser(id:number){
//         return this.store.get(id);
//     }

//     getUsers(){
//         return Array.from(this.store).map((_,user) => user);
//     }

//     updateUser(user:User , id:number){
//         this.store.set(id,user);
//     }

//     deleteUser(id:number){
//         this.store.delete(id);
//     }
// }

//*string object and array injection
//?in app module
// import { Module } from '@nestjs/common';
 // eslint-disable-next-line prettier/prettier
// import { UsersController } from './users.controller';
// import { AlbumsController } from './album.controller';

// @Module({
//   controllers: [UsersController , AlbumsController],
//   providers : [{provide: 'DATABASE_NAME' , useValue : 'MOON_KNIGHT'},
//   {provide: 'mail' , useValue : ['MOON_KNIGHT@gmail.com','dharmik@gmail.com']},
//   {provide: 'object' , useValue : {
//     type : "dev",
//     node : "17",
//   }}]
// })
// export class AppModule {}

//?in your controller
// export class UsersController {
//     constructor(@Inject('DATABASE_NAME') private dbname : string){
//       console.log(this.dbname);

//     }

//*factory injection
//?in controller
// import { Controller, Get , Inject, Optional} from '@nestjs/common';
// import { Subject } from 'rxjs';

// @Controller('/users')
// export class UsersController {
//   constructor(@Inject("event_store") private event : Subject<any>){
//     console.log(this.event);

//   }
// }

//?in app module
// const IS_DEV_MODE = true;
// @Module({
//   controllers: [UsersController, AlbumsController],
//   providers: [
//     {
//       provide: 'event_store',
//       useFactory: () => {
//         const event = IS_DEV_MODE
//           ? new ReplaySubject(2)
//           : new BehaviorSubject(null);

//         return event;
//       },
//     },
//   ],
// })
// export class AppModule {}

//*injection scope
//?1. default scope :- single shared provider instance within module
//?2. request scope :- create a new instance per incoming request or new instance of provider for every request @Injectable ({scope : Scope.REQUEST})
//?3. transient scope :- new dedicated instance of provider for each consumer (whoever injects it)

//*services
//?controller file
// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     Post,
//     Put,
//   } from '@nestjs/common';
//   import { CreateUserDto } from './dto/create-user.dto';
//   import { UserService } from './user.service';

//   @Controller('/users')
//   export class UsersController {

//       constructor(private UserService:UserService){}

//     @Post()
//     addUser(@Body() createUserDto: CreateUserDto) {
//      this.UserService.addUser(createUserDto);
//       return 'User created successfully';
//     }

   //   @Get()
   //   getUsers() {

   //   }

//     @Get(':id')
//     getUser(@Param('id') id: number) {
//       return this.UserService.getUser(id);
//     }

//     @Put(':id')
//     updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
//       this.UserService.getUser(id);
//       return 'user updated successfully';
//     }

//     @Delete(':id')
//     deleteUser(@Param('id') id: number) {
//       this.UserService.deleteUser(id);
//       return 'user deleted successfully';
//     }
//   }
//?service file
//   /* eslint-disable prettier/prettier */
// import { Injectable } from "@nestjs/common";

// export interface User {
//     name: string;
//     age: number;
//     id: number;
//   }
// @Injectable()
// export class UserService{
//     private store = new Map<number, User>();

//     addUser(user:User){
//         this.store.set(user.id,user);
//     }

//     getUser(id:number){
//         return this.store.get(id);
//     }

//     updateUser(id:number,user:User){
//         this.store.set(id,user);
//     }

//     deleteUser(id:number){
//         this.store.delete(id);
//     }
// }

//?module app

// @Module({
//     controllers: [UsersController, AlbumsController],
//     providers: [UserService],
//   })


//*Dynamic modules
//The Nest module system includes a powerful feature called dynamic modules. This feature enables you to easily create customizable modules that can register and configure providers dynamically. Dynamic modules are covered extensively here. In this chapter, we'll give a brief overview to complete the introduction to modules.
//?dynamic database module
// import { Module } from '@nestjs/common';
// import { createDatabaseProviders } from './database.providers';
// import { Connection } from './connection.provider';

// @Module({
//   providers: [Connection],
// })
// export class DatabaseModule {
//   static forRoot(entities = [], options) {
//     const providers = createDatabaseProviders(options, entities);
//     return {
//       module: DatabaseModule,
//       providers: providers,
//       exports: providers,
//     };
//   }
// }

//?interface
// {
//     global: true,
//     module: DatabaseModule,
//     providers: providers,
//     exports: providers,
//   }

//?database module
// import { Module } from '@nestjs/common';
// import { DatabaseModule } from './database/database.module';
// import { User } from './users/entities/user.entity';

// @Module({
//   imports: [DatabaseModule.forRoot([User])],
// })
// export class AppModule {}

//*pipes
// pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.
// Pipes have two typical use cases:
// transformation: transform input data to the desired form (e.g., from string to integer)
// validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception
//?Built-in pipes
// Nest comes with nine pipes available out-of-the-box:
// ValidationPipe
// ParseIntPipe
// ParseFloatPipe
// ParseBoolPipe
// ParseArrayPipe
// ParseUUIDPipe
// ParseEnumPipe
// DefaultValuePipe
// ParseFilePipe
//?ex
// @Get(':id')
// async findOne(@Param('id', ParseIntPipe) id: number) {
//   return this.catsService.findOne(id);
// }
//?dynamic status code 
// @Get(':id')
// async findOne(
//   @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
//   id: number,
// ) {
//   return this.catsService.findOne(id);
// }
//?ex
// @Get(':uuid')
// async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
//   return this.catsService.findOne(uuid);
// }


//*miiddleware
//?they are the functions which is called before the route handler(controller)
//?typres of middle ware
//!1.module based
//root
//|-users
//|-book
//!global
//?methods for craeting middle ware
//!function based
// import {request,Responce,NextFunction} from 'express';
// export function logger(req:Request,res:Responce,next:NextFunction){
//     console.log("request....");
//     next();
// };
//!class based
// @Injectable()
// export class LoggerMiddleWare implements NestMiddleware {
//     use(req:Request,res:Responce,next:NextFunction){
//         console.log("request....");
//         next();
//     }
// }
//?implement middleware
// @Module({
//     imports: [CatsModule],
//   })
//   export class AppModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//       consumer
//         .apply(LoggerMiddleware)
//         .forRoutes('cats');
//     }
//   }
//?Multiple middleware
//consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);

//*guards
//A guard is a class annotated with the @Injectable() decorator, which implements the CanActivate interface.
//Guards have a single responsibility. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time. This is often referred to as authorization.
//Guards are executed after all middleware, but before any interceptor or pipe.

//*interceptors
//An interceptor is a class annotated with the @Injectable() decorator and implements the NestInterceptor interface.

//*authentication in nest js
//?using passport nodejs library

//*ORM(object relational mapping)
//Object-relational mapping (ORM) is a technique that connects programming code with relational databases. It uses metadata descriptors to create a layer between object-oriented program (OOP) code and the database
//It allows developers to perform CRUD operations on databases without directly writing SQL code.
//ORM provides a higher level of abstraction and encapsulation, enabling developers to work with databases using OOP principles. 
