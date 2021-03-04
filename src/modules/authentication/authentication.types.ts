import {InputType, Field, ObjectType} from 'type-graphql'

@InputType()
export class RegisterInput {
  @Field()
  email!: string
  @Field()
  username!: string
  @Field()
  password!: string
}
