import { DataSource, DataSourceOptions } from 'typeorm';

const dataConnetion: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'myprints',
};

const Connection = new DataSource(dataConnetion);
