import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CardAnderson = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "professors/anderson_maciel.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return (
    <div className="card">
      <div className="card-imagen">
        <figure className="image">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content"></div>
    </div>
  )
}

export default CardAnderson
