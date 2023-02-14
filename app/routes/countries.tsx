import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {Link, Outlet, useLoaderData} from '@remix-run/react'
import {getCountries} from '~/models/country.server'
import styles from '~/styles/index.css'
import type {Country} from '~/types/Country'

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}]
}

export const headers = () => {
  return {
    'Cache-Control': 'public, max-age=604800',
  }
}

export const meta: MetaFunction = () => {
  return {
    title: 'Countries Page',
    description: ' This is the countries page',
  }
}

export async function loader() {
  const countries = await getCountries()
  return json({countries: countries.slice(0, 30)})
}

export default function Index() {
  const {countries} = useLoaderData<typeof loader>()

  return (
    <div className="wrapper">
      <aside>
        <nav>
          <Link to={`../`} className="secondary">
            <span>&#8678; Home</span>
          </Link>

          <hr></hr>

          <ul>
            {countries.map((country: Country) => (
              <li key={country.name.official}>
                <Link to={country.name.official}>{country.name.common}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
