import * as Yup from 'yup'
import {MiddlewareFn} from 'type-graphql'
import IContext from '../interfaces/Context'
import {UserInputError} from 'apollo-server-express'

export const validateInput = (
  schema: Yup.AnySchema
): MiddlewareFn<IContext> => async ({args}, next) => {
  try {
    const inputObj = args[Object.keys(args)[0]]

    await schema.validate(inputObj)

    return next()
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new UserInputError(
        'Failed to get events due to validation errors',
        {field: error.path, error: error.errors}
      )
    } else {
      console.log(error)
      throw new Error('Internal server error')
    }
  }
}
