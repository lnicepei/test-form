import { AppBar, Box, Paper, Typography } from '@mui/material'
import { Footer } from '@shared/ui/footer'
import { Logo } from '@shared/ui/logo'
import { Tabs } from '@shared/ui/tabs'

import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
    >
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        flexBasis={0}
        p={2}
        sx={{
          backgroundColor: {
            xs: 'white',
            sm: 'white',
            md: 'white',
            lg: 'transparent',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: {
              xs: 'white',
              sm: 'transparent',
              md: 'transparent',
              lg: 'transparent',
            },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pt: '20px',
            pb: '60px',
            mx: {
              xs: '0',
              lg: 'auto',
            }
          }}
        >
          <AppBar
            position="relative"
            color="transparent"
            elevation={0}
          >
            <Logo />
          </AppBar>
        </Box>
        <Paper
          elevation={0}
          sx={{
            height: {
              xs: '100%',
              sm: 'auto',
              md: 'auto',
              lg: 'auto',
            },
            padding: {
              lg: '30px 40px',
            },
            width: '100%',
            maxWidth: 480,
            mx: 'auto',
          }}
        >
          <Box>
            <Tabs />
            <Outlet />
          </Box>
        </Paper>
        <Footer />
      </Box>
      <Box
        flexBasis={0}
        flexGrow={1}
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'none',
            lg: 'block',
          },
        }}
      >
        <Box
          bgcolor="primary.main"
          height="100%"
          position="relative"
          overflow="hidden"
          sx={{ px: '54px', pt: '156px' }}
          p={2}
        >
          <Typography
            variant="h1"
            color="white"
          >
            Start Investing in global stock markets
          </Typography>
          <Typography
            variant="body1"
            color="white"
          >
            Mind-money.eu is the easiest place to invest your money and become a
            rich guy. Sign up and get started today free trial fo 14 days!
          </Typography>
          <img
            src="/globe.png"
            alt="Mind Money"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <img
            src="/dashboard.png"
            alt="Mind Money dashboard"
            style={{
              position: 'absolute',
              top: '50%',
              left: '20%',
              width: '100%',
            }}
          />
          <img
            src="/person1.png"
            alt="Mind Money dashboard"
            height={100}
            width={100}
            style={{
              position: 'absolute',
              top: '80%',
              left: '13%',
            }}
          />
          <img
            src="/person2.png"
            alt="Mind Money dashboard"
            height={100}
            width={100}
            style={{
              position: 'absolute',
              top: '44%',
              left: '80%',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
