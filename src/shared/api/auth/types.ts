import { z } from 'zod'
import { LoginUserDtoSchema, RegisterUserDtoSchema } from './contracts'

export type RegisterUserDto = z.infer<typeof RegisterUserDtoSchema>
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>
