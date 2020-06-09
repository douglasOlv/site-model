import React from "react"

import Image from "../image"

import "./style.css"

const Card = ({
  name,
  description,
  sorceLink,
  pageLink,
  backColor,
  imageName,
}) => {
  return (
    <div className="cardContainer">
      <div className="card" style={{ backgroundColor: backColor }}>
        <div className="imgBx">
          <Image imageName={imageName} />
        </div>
        <h2>{name}</h2>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
