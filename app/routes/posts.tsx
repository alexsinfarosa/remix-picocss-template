import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {Link, Outlet, useLoaderData} from '@remix-run/react'
import {getPosts} from '~/models/post.server'
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
    title: 'Index Page',
    description: ' This is the index page',
  }
}

export async function loader() {
  const posts = await getPosts()
  return json({posts: posts.slice(0, 10)})
}

export default function Index() {
  const {posts} = useLoaderData<typeof loader>()
  return (
    <div className="wrapper">
      <aside>
        <nav>
          <Link to={`../`} className="secondary">
            <span>&#8678; Home</span>
          </Link>

          <hr></hr>

          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={post.id.toString()}>{post.title}</Link>
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
