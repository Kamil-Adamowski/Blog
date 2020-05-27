import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      position: 'fixed',
      zIndex: '999',
      background: `rebeccapurple`,
      width: '100%',
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          BLOG
        </Link>
      </h1>
    </div>
  </header>
)



export default Header
