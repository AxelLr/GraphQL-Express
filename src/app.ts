import helmet from 'helmet'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import {AUTH_COOKIE_NAME, __DEV__} from './config/constants'
import express from 'express'
import cors from 'cors'

const app = express()

const RedisStore = connectRedis(session)
const redis = new Redis({
  host: 'redis-13582.c99.us-east-1-4.ec2.cloud.redislabs.com',
  port: 13582,
  password: 'NHXBtMGWnoKhm9gf4yR6XMCSdXy2NKit',
})

app.set('trust proxy', 1)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)

app.use(
  session({
    name: AUTH_COOKIE_NAME,
    store: new RedisStore({
      client: redis,
      disableTouch: true,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
      httpOnly: true,
      sameSite: 'lax',
      secure: !__DEV__,
      domain: !__DEV__ ? '.codeponder.com' : undefined,
    },
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET!,
    resave: false,
  })
)

app.use(cors())
app.use(helmet())

export default app
