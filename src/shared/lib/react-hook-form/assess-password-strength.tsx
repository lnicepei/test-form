import { Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'

export function assessPasswordStrength(password: string) {
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)
  const isLongEnough = password.length >= 8

  const criteriaMet = [
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialChar,
    isLongEnough,
  ].filter(Boolean).length

  let strengthLabel = ''
  let color = ''

  if (criteriaMet <= 2) {
    strengthLabel = 'Weak password'
    color = red[400]
  } else if (criteriaMet <= 4) {
    strengthLabel = 'Can be better'
    color = red[400]
  } else {
    strengthLabel = 'Strong password'
    color = green[400]
  }

  return (
    <Typography
      component="span"
      color={color}
    >
      {strengthLabel}
    </Typography>
  )
}
