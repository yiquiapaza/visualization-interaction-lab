import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"

const Publications = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Header />
      <SEO title="Publications" />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Publications
