// import IContext from 'src/interfaces/Context'
import {validateInput} from '../../middlewares/inputValidation'
import useragent from 'express-useragent'
import DeviceDetector from 'device-detector-js'
import {
  Arg,
  Ctx,
  //   Ctx,
  Mutation,
  // Query,
  Resolver,
  UseMiddleware,
  // Mutation,
  // Arg,
  // Field,
  // Ctx,
  // ObjectType,
  // Query,
  // FieldResolver,
  // Root,
} from 'type-graphql'
//   import { MyContext } from "../types";
import {User} from '../../entities/User'
import {RegisterInput} from './authentication.types'
import {registerSchema} from './authentication.schemas'
import IContext from '../../interfaces/Context'
import {Request} from 'express'
import {UserProfile} from '../../entities/UserProfile'
import {connect} from 'http2'
//   import argon2 from "argon2";
//   import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
//   import { UsernamePasswordInput } from "./UsernamePasswordInput";
//   import { validateRegister } from "../utils/validateRegister";
//   import { sendEmail } from "../utils/sendEmail";
//   import { v4 } from "uuid";
//   import { getConnection } from "typeorm";

const detector = new DeviceDetector()

@Resolver(User)
export class AuthenticationResolver {
  @Mutation(() => String)
  @UseMiddleware(validateInput(registerSchema))
  async register(
    @Arg('registerInput') registerInput: RegisterInput,
    @Ctx() {req}: IContext
  ) {
    console.log(registerInput)

    const source = req.headers['user-agent'],
      ua = useragent.parse(source!),
      userLanguaje = req.headers['accept-language']

    const result = detector.parse(source!)

    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress

    console.log({ua})
    console.log({userLanguaje})
    console.log({ip})
    console.log({result})

    const {email, password, username} = registerInput

    // // ADD A WAY TO CHECK EMAIL EXISTANCE. (sendgrid, postmark)

    // const user = await findByEmail(email)

    // if (user) return res.status(400).json({error: 'Email already taken'})

    // let hashedPassword = await hashPassword(password)

    // const activeToken = uuidv4()

    // await createUser({
    //   email,
    //   password: hashedPassword,
    //   activeAccountToken: activeToken,
    // })

    // const client = new postmark.Client(config.POSTMARK_TOKEN)

    // await client.sendEmail({
    //   From: config.EMAIL,
    //   To: email,
    //   Subject: 'Activate Account',
    //   TextBody: 'Soundcrawlers',
    //   HtmlBody: registerTemplate(
    //     config.CONFIRM_REGISTRATION_URL + `/${activeToken}`
    //   ),
    // })

    // return new UserInputError()

    return ''
    // you are not logged in
    // return await User.findOne(0)
  }
}
