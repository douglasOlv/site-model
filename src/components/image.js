import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imageName }) => {
  const { logo, foto03, foto02, foto01 } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foto01: file(relativePath: { eq: "foto-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto02: file(relativePath: { eq: "foto-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto03: file(relativePath: { eq: "foto-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  switch (imageName) {
    case "logo":
      return <Img fixed={logo.childImageSharp.fixed} />
    case "foto01":
      return <Img fluid={foto01.childImageSharp.fluid} />
    case "foto02":
      return <Img fluid={foto02.childImageSharp.fluid} />
    case "foto03":
      return <Img fluid={foto03.childImageSharp.fluid} />
    case "foto03":
      return <Img fluid={foto03.childImageSharp.fluid} />
    default:
      return null
  }
}

export default Image
