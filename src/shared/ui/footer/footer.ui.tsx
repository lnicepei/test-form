import { Box, Link, Typography } from '@mui/material'

export function Footer() {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'flex',
          lg: 'flex',
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      component="footer"
      mt="auto"
    >
      <Typography color="secondary">© 2024 MIND MONEY LIMITED</Typography>
      <Typography color="secondary">
        Have some issue? Write us{' '}
        <Link
          href="mailto:info@mind-money.eu"
          target="_blank"
          rel="noreferrer"
        >
          info@mind-money.eu
        </Link>
      </Typography>
    </Box>
  )
}
