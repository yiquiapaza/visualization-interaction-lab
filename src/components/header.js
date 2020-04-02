import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = props => {
  return (
    <header className="is-color-dark">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Here Imange for
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            arial-label="menu"
            arial-expanded="false"
            data-target="navbarBasicExample"
          >
            <span arial-label="menu"></span>
            <span arial-label="menu"></span>
            <span arial-label="menu"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link
              to="/publications"
              activeStyle={{ color: "red" }}
              className="navbar-item"
              activeClassName="navbar-item"
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
