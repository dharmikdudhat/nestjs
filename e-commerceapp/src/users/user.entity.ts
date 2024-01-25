/* eslint-disable prettier/prettier */
import { Roles } from "src/utility/common/user-roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ 
        type: 'enum', 
        enum: Roles, 
        default: Roles.USER
    })
    roles: Roles
}


@Entity()
export class Role {

}