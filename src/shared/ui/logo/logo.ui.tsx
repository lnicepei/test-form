import { Box } from '@mui/material'
import { pathKeys } from '@shared/lib/router'
import { NavLink } from 'react-router-dom'

export function Logo() {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      component={NavLink}
      to={pathKeys.home()}
    >
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
          },
          height: '20px',
        }}
      >
        <img
          src="/mind-money-logo.svg"
          alt="Mind Money"
        />
      </Box>

      <img
        src="/mind-money-text.svg"
        alt="Mind Money"
        height={20}
      />
    </Box>
  )
}
