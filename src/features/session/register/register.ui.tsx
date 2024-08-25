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
    watch,
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

  const isPromoCodeValid =
    watch('referralCode') === import.meta.env.VITE_PROMO_CODE

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
                  component="span"
                  gap={1}
                >
                  <Typography
                    color="secondary"
                    component="span"
                  >
                    Strength: {assessPasswordStrength(watch('password'))}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    gap={1}
                    component="span"
                  >
                    {errors.password?.message && (
                      <img
                        src="/cross.svg"
                        alt="info"
                      />
                    )}
                    <Typography
                      color="secondary"
                      component="span"
                    >
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

        <Box position="relative">
          <TextField
            type="string"
            fullWidth
            placeholder="Referral code"
            {...register('referralCode')}
          />
          {isPromoCodeValid && (
            <Box
              position="absolute"
              right={20}
              top={15}
            >
              <img
                src="/tick.svg"
                alt="info"
              />
            </Box>
          )}
        </Box>

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
          disabled={!canSubmit}
        >
          Sign in
        </Button>
      </Stack>
    </form>
  )
}
