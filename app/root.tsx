import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import picoStyles from '@picocss/pico/css/pico.min.css'
import rootStyles from '~/styles/root.css'

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: picoStyles,
  },
  {
    rel: 'stylesheet',
    href: rootStyles,
  },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Alex Template',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
