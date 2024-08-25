import { z } from 'zod'

export const RegisterUserDtoSchema = z
  .object({
    email: z.string().email({
      message:
        'Oops! The email address you entered is invalid. Please double-check and make sure it follows the format: example@domain.com',
    }),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/, {
        message: 'One or more capitalized letters.',
      })
      .regex(/(?=.*[\d`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ])/, {
        message: 'Contains a number or(and) symbol',
      }),
    referralCode: z.string().optional(),
    terms: z.boolean().refine((value) => value, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => !data.password.includes(data.email), {
    message: 'Password must not contain email',
    path: ['password'],
  })

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
