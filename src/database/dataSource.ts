import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
let envFileName = '.env';
dotenv.config({ path: __dirname + '/../../' + envFileName });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entities/index{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
