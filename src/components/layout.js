/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { FaGithub } from "react-icons/fa"

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
        <div className="bg-gray-800 px-8 pb-8 pt-5 flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className="lg:w-1/3 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque ipsum mollitia beatae provident magnam non tenetur odio
            sunt quisquam?
          </div>
          <div className="pb-4 ml-auto">
            <a href="https://github.com/douglasOlv">
              <FaGithub size={40} />
            </a>
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
