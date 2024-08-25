import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { blue } from '@mui/material/colors'
import { useForm } from 'react-hook-form'

import { RegisterUserDto, RegisterUserDtoSchema } from '@shared/api/auth'
import {
  assessPasswordStrength,
  generatePassword,
} from '@shared/lib/react-hook-form'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterUserDto>({
    mode: 'all',
    resolver: zodResolver(RegisterUserDtoSchema),
    defaultValues: { email: '', password: '', phone: '', terms: false },
  })

  const canSubmit = [isDirty, isValid].every(Boolean)

  const onSubmit = (registerUserDto: RegisterUserDto) =>
    alert(JSON.stringify(registerUserDto))

  const onGeneratePassword = () => {
    const password = generatePassword()
    setValue('password', password)
  }

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

        <TextField
          type="tel"
          placeholder="Phone number"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <Box position="relative">
          <TextField
            fullWidth
            type="text"
            placeholder="Password"
            {...register('password')}
            error={!!errors.password}
            helperText={
              errors.password?.message && (
                <Box
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  gap={1}
                >
                  <Typography color="secondary">
                    Strength: {assessPasswordStrength(getValues('password'))}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    gap={1}
                  >
                    {errors.password?.message && (
                      <img
                        src="/cross.svg"
                        alt="info"
                      />
                    )}
                    <Typography color="secondary">
                      {errors.password?.message}
                    </Typography>
                  </Box>
                </Box>
              )
            }
          />
          <Button
            sx={{
              position: 'absolute',
              right: '1rem',
              zIndex: 1,
              top: 11,
              height: '35px',
              color: 'black',
              p: 2,
            }}
            color="secondary"
            variant="outlined"
            type="button"
            onClick={onGeneratePassword}
          >
            Generate
          </Button>
        </Box>

        <TextField
          type="string"
          placeholder="Referral code"
          {...register('referralCode')}
          error={!!errors.referralCode}
          helperText={errors.referralCode?.message}
        />

        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: blue[500] }}
              {...register('terms')}
            />
          }
          label={
            <Box
              display="flex"
              flexWrap="wrap"
              margin={0}
            >
              <Typography color="secondary">I accept the&nbsp;</Typography>
              <Link
                href="https://www.google.com"
                target="_blank"
              >
                Terms of Use
              </Link>
              <Typography color="secondary">&nbsp;and&nbsp;</Typography>
              <Link
                href="https://www.google.com"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </Box>
          }
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: blue[700] }}
          disabled={!canSubmit}
        >
          Sign in
        </Button>
      </Stack>
    </form>
  )
}
