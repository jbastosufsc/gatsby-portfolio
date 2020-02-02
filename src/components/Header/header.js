import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
    <ul className="navMenu">
      {menuLinks.map(navOption => (
        <li key={navOption.name}>
          <Link to={navOption.link}>{navOption.name}</Link>
        </li>
      ))}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
