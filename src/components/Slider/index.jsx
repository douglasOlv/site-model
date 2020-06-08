import React from "react"
import Swiper from "react-id-swiper"
// Version >= 2.4.0
import "swiper/css/swiper.min.css"
import "./style.css"

import Image from "../image"

const SimpleSwiper = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} square" ></span>`
      },
      bulletActiveClass: "square-active",
    },
    effect: "cube",
    cubeEffect: {
      slideShadows: false,
    },
    autoplay: {
      deley: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    spaceBetween: 10,
  }
  return (
    <Swiper {...params}>
      <div>
        <Image imageName="foto01" />
      </div>
      <div>
        <Image imageName="foto02" />
      </div>
      <div>
        <Image imageName="foto03" />
      </div>
    </Swiper>
  )
}

export default SimpleSwiper
