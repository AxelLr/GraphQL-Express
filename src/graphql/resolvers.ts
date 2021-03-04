import {AuthenticationResolver} from '../modules/authentication/authentication.resolvers'
import {UserResolver} from '../modules/user/user.resolvers'

export const Resolvers:
  | [Function, ...Function[]]
  | readonly [string, ...string[]]
  | [string, ...string[]] = [UserResolver, AuthenticationResolver]
