import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {Link, Outlet, useLoaderData} from '@remix-run/react'
import {getCountries} from '~/models/country.server'
import styles from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}]
}

export const headers = () => {
  return {
    'Cache-Control': 'public, max-age=60',
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
  return json({countries: countries[0]})
}

export default function Index() {
  const {countries} = useLoaderData<typeof loader>()
  console.log(countries)
  return (
    <div className="wrapper">
      <aside>
        <nav>
          <Link to={`../`} className="secondary">
            <span>&#8678; Home</span>
          </Link>

          <hr></hr>

          {/* <ul>
            {countries.map(country => (
              <li key={country.name}>
                <Link to={country.name}>{country.name}</Link>
              </li>
            ))}
          </ul> */}
        </nav>
      </aside>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
