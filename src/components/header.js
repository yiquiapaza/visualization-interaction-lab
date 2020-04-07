import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fixed(width: 120, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header className="is-color-dark">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-start">
          <Link className="is-image navbar-item" to="/">
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="Placeholder image"
            />
          </Link>

          <a
            href="/"
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
