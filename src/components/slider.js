import React, { useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"
import Slide from "../components/slide"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

function Slider() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel interval="10000">
        <Carousel.Item>
          <Slide></Slide>
        </Carousel.Item>
        <Carousel.Item>
          <Slide></Slide>
        </Carousel.Item>
        <Carousel.Item>
          <Slide></Slide>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider
