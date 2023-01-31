import {Link} from '@remix-run/react'

export default function IndexPage() {
  return (
    <div className="container">
      <h1>Index page</h1>
      <p>Available Routes:</p>
      <Link to="posts">posts</Link>
    </div>
  )
}
