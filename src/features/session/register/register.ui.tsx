import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterUserDto, RegisterUserDtoSchema } from '@shared/api/auth'
import { generatePassword, hasMessages } from '@shared/lib/react-hook-form'
import { ErrorList } from '@shared/ui/error-list'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterUserDto>({
    mode: 'onTouched',
    resolver: zodResolver(RegisterUserDtoSchema),
    defaultValues: { email: '', password: '', terms: false },
  })
  const [showPassword, setShowPassword] = useState(false)

  const canSubmit = [isDirty, isValid].every(Boolean)

  const onSubmit = (registerUserDto: RegisterUserDto) =>
    alert(JSON.stringify(registerUserDto))

  const onGeneratePassword = () => {
    const password = generatePassword()
    setValue('password', password)
  }

  return (
    <>
      {hasMessages(errors) && <ErrorList errors={errors} />}

      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.log('errors', errors)
        })}
      >
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Email"
            {...register('email')}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <button
            type="button"
            onClick={onGeneratePassword}
          >
            Generate Password
          </button>
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="string"
            placeholder="Referral code"
            {...register('referralCode')}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="terms">
            I accept the{' '}
            <a
              href="https://www.google.com"
              target="_blank"
            >
              Terms of Use
            </a>
            and
            <a
              href="https://www.google.com"
              target="_blank"
            >
              Privacy Policy
            </a>
          </label>
          <input
            type="checkbox"
            {...register('terms')}
          />
          {errors.terms && (
            <p className="error-message">{errors.terms.message}</p>
          )}
        </fieldset>

        <button
          className="btn btn-lg btn-primary pull-xs-right"
          type="submit"
          disabled={!canSubmit}
        >
          Sign in
        </button>
      </form>
    </>
  )
}
