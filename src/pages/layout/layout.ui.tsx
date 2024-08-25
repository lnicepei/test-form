import { pathKeys } from '@shared/lib/router'
import { NavLink } from 'react-router-dom'

import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <HomeLink />
            </li>
            <li className="nav-item">
              <SignInLink />
            </li>
            <li className="nav-item">
              <SignUpLink />
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <span>© 2024 MIND MONEY LIMITED</span>
        <span className="attribution">
          Have some issue?{' '}
          <a
            href="mailto:info@mind-money.eu"
            target="_blank"
            rel="noreferrer"
          >
            info@mind-money.eu
          </a>
        </span>
      </div>
    </footer>
  )
}

export function HomeLink() {
  return (
    <NavLink
      className="nav-link"
      to={pathKeys.home()}
    >
      Home
    </NavLink>
  )
}

export function SignInLink() {
  return (
    <NavLink
      className="nav-link"
      to={pathKeys.login()}
    >
      Sign in
    </NavLink>
  )
}

export function SignUpLink() {
  return (
    <NavLink
      className="nav-link"
      to={pathKeys.register()}
    >
      Sign up
    </NavLink>
  )
}
