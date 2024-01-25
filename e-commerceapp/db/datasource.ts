/* eslint-disable prettier/prettier */
import {DataSource,DataSourceOptions} from 'typeorm'
import {config} from 'dotenv'
import { UserEntity } from 'src/users/user.entity';
config()
export const dataSourceOptions:DataSourceOptions={
    type:'postgres',
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    entities:[UserEntity],
    migrations:['dist/db/migrations/*{.ts,.js}'],
    logging:false,
    synchronize:false

}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;