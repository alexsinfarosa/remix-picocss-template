import type {LinksFunction} from '@remix-run/node'
import styles from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}]
}

export default function Index() {
  return (
    <div className="wrapper">
      <nav>
        <aside>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </aside>
      </nav>
      <main>
        <h1>Home</h1>
        <p>Remix is a new framework for building websites and web apps.</p>

        <p>
          It's built on top of React, React Router, and other popular libraries.
        </p>

        <p>
          It's designed to make it easy to build static sites, dynamic sites,
          and hybrid sites.
        </p>

        <button>Ciccio</button>
      </main>
    </div>
  )
}
