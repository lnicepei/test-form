import { AppBar, Box, Paper, Tab, Typography } from '@mui/material'
import { pathKeys } from '@shared/lib/router'
import { NavLink } from 'react-router-dom'

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
            py: '30px',
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
          square
          sx={{
            height: {
              xs: '100%',
              sm: 'auto',
              md: 'auto',
              lg: 'auto',
            },
            width: '100%',
            maxWidth: 480,
            mx: 'auto',
          }}
        >
          <Box>
            <MyTabs />
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
            Mind.money.eu is the easiest place to invest your money and become a
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
              top: '40%',
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
              top: '75%',
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
              top: '34%',
              left: '80%',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

import Tabs from '@mui/material/Tabs'
import { Link, matchPath, useLocation } from 'react-router-dom'

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}

function MyTabs() {
  const routeMatch = useRouteMatch([pathKeys.login(), pathKeys.register()])
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs
      value={currentTab}
      sx={{
        py: '20px',
        width: '100%',
      }}
    >
      <Tab
        label="Sign In"
        value={pathKeys.register()}
        to={pathKeys.register()}
        component={Link}
      />
      <Tab
        label="Login"
        value={pathKeys.login()}
        to={pathKeys.login()}
        component={Link}
      />
    </Tabs>
  )
}

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
        Have some issue?{' '}
        <Link
          to="mailto:info@mind-money.eu"
          target="_blank"
          rel="noreferrer"
        >
          info@mind-money.eu
        </Link>
      </Typography>
    </Box>
  )
}

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
