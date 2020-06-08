import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="bg-gray-800 p-2 flex items-center">
      <div className="mr-5">
        <Image imageName="logo" />
      </div>
      <div className="lg:mr-auto">
        <Link
          to="/"
          className="hover:text-gray-400 text-purple-600 font-medium p-2"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-gray-400 text-gray-600 font-medium p-2"
        >
          Sobre
        </Link>
        <Link
          to="/gallery"
          className="hover:text-gray-400 text-gray-600 font-medium p-2"
        >
          Galeria
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-400 text-gray-600 font-medium p-2"
        >
          Contato
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
