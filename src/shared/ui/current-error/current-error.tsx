import { Box, Typography } from '@mui/material'
import { assessPasswordStrength } from '@shared/lib/react-hook-form'

type CurrentErrorProps = {
  error: string
  currentPassword: string
}

export function CurrentError({ error, currentPassword }: CurrentErrorProps) {
  return (
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
        Strength: {assessPasswordStrength(currentPassword)}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        gap={1}
        component="span"
      >
        {error && (
          <img
            src="/cross.svg"
            alt="info"
          />
        )}
        <Typography
          color="secondary"
          component="span"
        >
          {error}
        </Typography>
      </Box>
    </Box>
  )
}
