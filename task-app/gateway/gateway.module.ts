import { Module } from "@nestjs/common";
import { AppController } from '../../auth-jwt-project/src/app.controller';

@Module({
    imports:[GatewayModule],
    controllers:[AppController],
    providers:[]
})
