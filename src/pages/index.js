import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/bulma.scss"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <SEO title="Home" />
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="content is-centered">
              <h1>Graphics, Visualization and Interaction Lab</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <div className="container">
          <div className="content">
            <p align="justify">
              The Visualization, Interaction and Simulation Lab is part of the
              Computer Graphics, Image Processing and Interaction Group at
              UFRGS. That group started its activities in 1978 and, at that
              time, was mainly concerned with the development of fundamental
              algorithms. Since the 80's the group has been dedicated both to
              education and research. It was responsible for a big project on
              computer aided design of digital systems, which ended up in the
              early 90's. Members of the group are active in teaching
              undergraduate and graduate courses in Computer Graphics and Image
              Processing. Research in the 90's was mainly focused on rendering
              and animation, where a large number of M.Sc. students developed
              their thesis.
            </p>
            <p align="justify">
              Recent research efforts include scientific visualization and image
              processing applications, rendering algorithms using recent
              graphics hardware, modeling of natural phenomena, rendering for
              Medicine applications, spatial data structures, virtual humans
              modeling and animation, 3D interaction (development and
              evaluation), information visualization techniques.
            </p>
            <h2>Research Areas </h2>
            <p align="justify">
              Geometric modeling: data collected from 3D scanners; pose
              alterations; 3D photography; mesh simplification and compression;
              real time rendering; photorealistic rendering; visual realism in
              surgery simulators; applications in games and animations; modeling
              of natural phenomena
            </p>
            <h3>Modeling and Rendering </h3>
            <p align="justify">
              Real time video capturing and processing for video-surgery; real
              time audio synthesis using GPU programming.
            </p>
            <h3>Video and Audio Processing </h3>
            <p align="justify">
              <h3>Interaction</h3>
            </p>
            <p align="justify">
              Study and development of interaction techniques for data and
              information visualization applications; study and development of
              3D immersive interaction environments; multimodal applications;
              usability evaluation of 3D and multimodal interactive techniques.
            </p>
            <h3>Animation in Virtual Environments </h3>
            <p align="justify">
              Simulation of character behavior in virtual environments; path
              planning in dynamic environments; animation of virtual humans and
              virtual communities; and signal languages (LIBRAS)
            </p>
            <h3>Information Visualization </h3>
            <p align="justify">
              Study and development of information visualization techniques:
              hierarchical data, social networks scientific data, volumetric
              data, temporal data; usability evaluation of visualization
              techniques; modeling of visualization tasks;
            </p>
            <h3>Image Processing: Image and video processing and analysis </h3>
            <p align="justify">
              Extraction and summarization of images and videos for content
              indexing and retrieval; face recognition; visual data coding and
              storage.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
