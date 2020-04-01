import React from "react"
import "../styles/bulma.scss"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Footer/>
    </div>
  )
}

export default IndexPage
