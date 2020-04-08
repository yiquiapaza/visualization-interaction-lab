import React from "react"

import { Link } from "gatsby"

import PropTypes from "prop-types"

const Header = () => {
  return (
    <header className="is-color-dark">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" activeStyle={{ color: "red" }} className="navbar-item">
              Home
            </Link>
            <Link
              to="/publications"
              activeStyle={{ color: "red" }}
              className="navbar-item"
            >
              Publications
            </Link>
            <Link
              to="/projects"
              activeStyle={{ color: "red" }}
              className="navbar-item"
            >
              Projects
            </Link>
            <Link
              to="/professors"
              activeStyle={{ color: "red" }}
              className="navbar-item"
            >
              Professors
            </Link>
            <Link
              to="/students"
              activeStyle={{ color: "red" }}
              className="navbar-item"
            >
              Students
            </Link>
            <Link
              to="/contact"
              activeStyle={{ color: "red" }}
              className="navbar-item"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
