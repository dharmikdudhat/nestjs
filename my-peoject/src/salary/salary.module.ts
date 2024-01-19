/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SalaryController } from './salary/salary.controller';
import { salaryMiddleware } from './salary.middleware';

@Module({
  controllers: [SalaryController]
})
export class SalaryModule implements NestModule{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configure(_consumer: MiddlewareConsumer) {
       _consumer.apply(salaryMiddleware).forRoutes("salary");
    }
}
