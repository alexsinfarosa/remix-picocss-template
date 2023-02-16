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
        {links.map(link => (
          <Link key={link.to} to={link.to} style={{...linkStyle}}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

const links = [{to: 'countries', text: 'Countries'}]
