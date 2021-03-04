import * as dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import express from 'express'
import config from './config/config'
import {__DEV__, AUTH_COOKIE_NAME} from './config/constants'
import {ApolloServer} from 'apollo-server-express'
// import ApolloConfig from './config/apollo'
import {createConnection} from 'typeorm'
import {buildSchema} from 'type-graphql'
import {Resolvers} from './graphql/resolvers'
import IContext from './interfaces/Context'
import app from './app'
;(async function startServer() {
  try {
    await createConnection(config.TYPEORM_CONFIG)

    console.log('DB connected')

    const apolloServer = new ApolloServer({
      playground: __DEV__,
      debug: __DEV__,
      schema: await buildSchema({
        resolvers: Resolvers,
        validate: false,
      }),
      context: ({req, res}: IContext) => ({
        req,
        res,
      }),
    })

    apolloServer.applyMiddleware({app})

    app.listen(config.PORT, () =>
      console.log(`Server started on PORT ${config.PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
})()
