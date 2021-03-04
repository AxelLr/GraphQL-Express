import {User} from '../entities/User'
import {ConnectionOptions} from 'typeorm'
import {__DEV__} from './constants'

export const TYPEORM_CONFIG: ConnectionOptions = {
  host: 'ec2-54-157-66-140.compute-1.amazonaws.com',
  database: 'd125hvfv98ss57',
  username: 'xziorgaccuwpoa',
  port: 5432,
  password: 'd0395f6e0de6ac23fe33a575be06351eee8d13b62203028caf235de61e547a6c',
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
