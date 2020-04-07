import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CardAnderson = props => {
  const data = useStaticQuery(graphql`
    {
      images: file(relativePath: { eq: "professors/carla_freitas.png" }) {
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

      dataProfessors: allProfessorsJson {
        nodes {
          email
          descripion
          id
          name
        }
      }
    }
  `)

  return (
    <div className="card">
      <div className="card-imagen">
        <figure className="image">
          <Img
            fluid={data.images.childImageSharp.fluid}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{data.dataProfessors.nodes[0].name}</p>
            <p className="subtitle is-6">
              {data.dataProfessors.nodes[0].email}
            </p>
          </div>
        </div>
        <div className="content">
          {data.dataProfessors.nodes[0].descripion.toString().slice(0, 300)}...
        </div>
      </div>
    </div>
  )
}

export default CardAnderson
