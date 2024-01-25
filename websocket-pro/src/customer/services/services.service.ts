/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {
    users = [
        {
            id: 1,
            email: "dd@gmail.com",
            createdAt: new Date(),
        },
        {
            id: 2,
            email: "ddd@gmail.com",
            createdAt: new Date(),
        },
        {
            id: 3,
            email: "dddd@gmail.com",
            createdAt: new Date(),
        }];

    findCustomerById(id: number) {
        return this.users.find((user) => user.id === id)
     }
}
