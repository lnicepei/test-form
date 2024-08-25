import { Tab } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import { pathKeys } from '@shared/lib/router'
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

export function MyTabs() {
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
        disableRipple
        sx={{ fontSize: 16 }}
      />
      <Tab
        label="Login"
        value={pathKeys.login()}
        to={pathKeys.login()}
        component={Link}
        disableRipple
        sx={{ fontSize: 16 }}
      />
    </Tabs>
  )
}
