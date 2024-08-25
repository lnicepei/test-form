import { Layout } from '@pages/layout'
import { LoginPage } from '@pages/login'
import { RegisterPage } from '@pages/register'
import { pathKeys } from '@shared/lib/router'

import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
  useRouteError,
} from 'react-router-dom'

export function BrowserRouter() {
  return <RouterProvider router={browserRouter} />
}

const browserRouter = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: pathKeys.register(),
            element: <RegisterPage />,
          },
          {
            path: pathKeys.login(),
            element: <LoginPage />,
          },
          {
            path: pathKeys.home(),
            loader: async () => redirect(pathKeys.register()),
          },
        ],
      },
      {
        element: <Outlet />,
        children: [
          {
            path: pathKeys.page404(),
            element: <h1>404</h1>,
          },
        ],
      },
      {
        loader: async () => redirect(pathKeys.page404()),
        path: '*',
      },
    ],
  },
])

function BubbleError() {
  const error = useRouteError()

  if (error) throw error

  return null
}
