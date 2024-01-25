/* eslint-disable prettier/prettier */
import { Roles } from "src/utility/common/user-roles.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique:true})
    email: string;

    @Column({select:false})
    password: string;

    @Column({ 
        type: 'enum', 
        enum: Roles, 
        default: Roles.USER
    })
    roles: Roles

    @CreateDateColumn()
    createdAt:Timestamp;

    @UpdateDateColumn()
    updateAt:Timestamp;
    
}


@Entity()
export class Role {

}