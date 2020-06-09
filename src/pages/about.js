import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const SecondPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <div className="flex flex-col px-10 py-10 ">
      <h1 className="text-4xl text-purple-600">Sobre</h1>
      <p className="text-lg text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        excepturi iure labore.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <Card
          imageName="foto01"
          name="Lorem, ipsum dolor."
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad, excepturi sequi beatae iusto maxime."
          backColor="#673AB7"
        />
        <Card
          imageName="foto02"
          name="Lorem, ipsum."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi perferendis vero laudantium temporibus vel. Similique explicabo facere alias consectetur beatae. Debitis!"
          backColor="#FF9800"
        />
        <Card
          imageName="foto03"
          name="Lorem, ipsum dolor."
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat facilis minima, molestias quasi quaerat molestiae vero nam."
          backColor="#673AB7"
        />
      </div>
    </div>
  </Layout>
)

export default SecondPage
