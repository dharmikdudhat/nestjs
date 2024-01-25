/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from 'gateway/gateway.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [GatewayModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
