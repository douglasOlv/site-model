/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer>
        <div className="bg-gray-800 px-8 pb-8 pt-5">
          <div className="w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque ipsum mollitia beatae provident magnam non tenetur odio
            sunt quisquam?
          </div>
        </div>
        <div className="bg-gray-900 flex content-end flex-wrap p-2">
          <span>
            Copyright © 2020,{" "}
            <a href="https://github.com/douglasOlv">Douglas Oliveira</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Layout
