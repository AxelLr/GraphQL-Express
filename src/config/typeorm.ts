import {User} from '../entities/User'
import {ConnectionOptions} from 'typeorm'
import {__DEV__} from './constants'

export const TYPEORM_CONFIG: ConnectionOptions = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  username: process.env.DATABASE_USERNAME,
  port:  +process.env.DATABASE_PORT!,
  password:  process.env.DATABASE_PASSWORD,
  // username: process.env.DATABASE_USER,
  // password: process.env.DATABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  type: 'postgres',
  // synchronize: true,
  logging: false,
  entities: !__DEV__
    ? ['../build/entities/**/*.js']
    : ['../src/entities/**/*.ts'],
  // migrations: !__DEV__
  //   ? ['build/migration/**/*.js']
  //   : ['src/migration/**/*.ts'],
  // subscribers: !__DEV__
  //   ? ['build/subscriber/**/*.js']
  //   : ['src/subscriber/**/*.ts'],
  // cli: {
  //   entitiesDir: !__DEV__ ? 'build/entities' : 'src/entities',
  //   migrationsDir: !__DEV__ ? 'build/migrations' : 'src/migrations',
  //   subscribersDir: !__DEV__ ? 'build/subscriber' : 'src/subscriber',
  // },
}
