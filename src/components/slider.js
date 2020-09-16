import React, { useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"
import Slide from "../components/slide"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

import tlo from "../tlo.jpg"
import rgb_game from "../rgb_game.jpg"
import reflex_game from "../reflex_game.jpg"
import shop from "../shop.jpg"

function Slider({}) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel interval={null}>
        <Carousel.Item>
          <Slide
            title="Rest Countries API"
            desc=" tutaj cos wpisac na temat tego projektu blavavvavavavavvav"
            technologies="Gatsby, React, JSX, Rest API"
            githubURL="https://github.com/zielinp/REST-Countries-API"
            demoURL="#"
            image={tlo}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            title="React Shopping App"
            desc="E-commerce app based on React, Redux and sending emails. LEPSZY OPIS"
            technologies="React, Redux, Materialize, EmailJS "
            githubURL="https://github.com/zielinp/RGB-Guess-Game"
            demoURL="https://zielinp.github.io/RGB-Guess-Game/"
            image={shop}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            title="Reflex Game"
            desc=" First game project created as part of learning the basics of
          JavaScript based on functional programming."
            technologies="JavaScript"
            githubURL="https://github.com/zielinp/Reflex-Game"
            demoURL="https://zielinp.github.io/Reflex-Game/"
            image={reflex_game}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slide
            title="RGB Guess Game"
            desc=" First game project created as part of learning the basics of
          JavaScript based on functional programming."
            technologies="CSS, HTML, JavaScript"
            githubURL="https://github.com/zielinp/RGB-Guess-Game"
            demoURL="https://zielinp.github.io/RGB-Guess-Game/"
            image={rgb_game}
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider
