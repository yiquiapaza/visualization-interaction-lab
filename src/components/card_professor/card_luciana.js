import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CardLuciana = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "professors/carla_freitas.png" }) {
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

export default CardLuciana
