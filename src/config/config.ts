import {TYPEORM_CONFIG} from './typeorm'

export default {
  PORT: process.env.PORT || 4000,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
  ACCESS_TOKEN_EXPIRATION: '365d',
  TYPEORM_CONFIG,
}
