/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { UsersController } from './controllers/users.controller';
import { UserService } from "./services/user.service";
import { AlbumsController } from "./controllers/album.controller";

@Global()
@Module({
    imports:[],
    controllers: [UsersController,AlbumsController],
    providers:[UserService],
    exports:[UserService]
})
export class UserModule{}