/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}


//Working on different backend technologies starting from Javascript Backend portion to TypeScript and then moving forward to Nodejs and further with its frameworks like Nestjs.Also work on different databases like SQL(MySql , Postgres) and NoSQl(MongoDb , FireBase).Working on Different projects using these all technologies.
//Backend Part-Javascript , NodeJS with it's frameworks and Databases