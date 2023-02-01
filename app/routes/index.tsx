import {Link} from '@remix-run/react'

const linkStyle = {
  padding: '1rem',
  border: '1px solid #eee',
}

export default function IndexPage() {
  return (
    <div className="container">
      <h1>Index page</h1>
      <p>Available Routes:</p>
      <div className="grid">
        <Link to="posts" style={{...linkStyle}}>
          /posts
        </Link>
      </div>
    </div>
  )
}
