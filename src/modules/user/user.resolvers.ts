import {
  Query,
  Resolver,
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
import {UserProfile} from '../../entities/UserProfile'
//   import argon2 from "argon2";
//   import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
//   import { UsernamePasswordInput } from "./UsernamePasswordInput";
//   import { validateRegister } from "../utils/validateRegister";
//   import { sendEmail } from "../utils/sendEmail";
//   import { v4 } from "uuid";
//   import { getConnection } from "typeorm";

@Resolver(UserProfile)
export class UserResolver {
  @Query(() => UserProfile, {nullable: true})
  async me() {
    // you are not logged in
    // return await User.findOne(0)
  }
}
