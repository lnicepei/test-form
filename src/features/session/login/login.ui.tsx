import { zodResolver } from '@hookform/resolvers/zod'
import { LoginUserDto, LoginUserDtoSchema } from '@shared/api/auth'
import { hasMessages } from '@shared/lib/react-hook-form'
import { ErrorList } from '@shared/ui/error-list'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginUserDto>({
    mode: 'onTouched',
    resolver: zodResolver(LoginUserDtoSchema),
    defaultValues: { email: '', password: '' },
  })

  const canSubmit = [isDirty, isValid].every(Boolean)

  const onSubmit = (loginUserDto: LoginUserDto) =>
    alert(JSON.stringify(loginUserDto))

  return (
    <>
      {hasMessages(errors) && <ErrorList errors={errors} />}

      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
            placeholder="Password"
            {...register('password')}
          />
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
