import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Slider from "../components/Slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <div className="flex flex-col px-10 py-10 ">
      <h1
        className="text-purple-800 font-semibold
        text-5xl
    "
      >
        Home
      </h1>
      <p className="text-gray-800">Welcome to your new Gatsby site.</p>
    </div>
  </Layout>
)

export default IndexPage
