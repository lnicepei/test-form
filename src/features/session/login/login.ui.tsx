import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Stack, TextField } from '@mui/material'
import { LoginUserDto, LoginUserDtoSchema } from '@shared/api/auth'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginUserDto>({
    mode: 'all',
    resolver: zodResolver(LoginUserDtoSchema),
    defaultValues: { email: '', password: '' },
  })

  const canSubmit = [isDirty, isValid].every(Boolean)

  const onSubmit = (loginUserDto: LoginUserDto) =>
    alert(JSON.stringify(loginUserDto))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="E-mail"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Box position="relative">
          <TextField
            fullWidth
            type="text"
            placeholder="Password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={!canSubmit}
        >
          Login
        </Button>
      </Stack>
    </form>
  )
}
