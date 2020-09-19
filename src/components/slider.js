import React, { useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"
import Slide from "../components/slide"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

import tlo from "../tlo.jpg"
import test from "../test.mp4"
import test2 from "../test2.mp4"
import rgb_game from "../rgb_game.jpg"
import reflex_game from "../reflex_game.jpg"
import shop from "../shop.jpg"

function Slider({}) {
  const [index, setIndex] = useState(0)

  const handleNextButton = (selectedIndex, e) => {
    if (index === 3) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const handlePrevButton = (selectedIndex, e) => {
    if (index === 0) {
      setIndex(3)
    } else {
      setIndex(index - 1)
    }
  }
  // const preventFunc = (selectedIndex, e) => {
  //   e.preventDefault()
  // }

  const handleSelectDots = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div>
        <Carousel
          onSelect={handleSelectDots}
          id="projects"
          interval={null}
          controls={true}
          activeIndex={index}
        >
          <Carousel.Item>
            <Slide
              title="Rest Countries API"
              desc="Are you good at geography? In this app you can find the most important information about the country of your choice. Search by name, filter by regions, check bordering countries, currency and many more."
              technologies="Gatsby, React, JSX, Rest API"
              githubURL="https://github.com/zielinp/REST-Countries-API"
              demoURL="#"
              video={test}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              title="React Shopping App"
              desc="Online shopping? Sure! Choose the products, add to the basket and receive an order summary in the e-mail. You can also subscribe to the newsletter or learn more about the store."
              technologies="React, Redux, Materialize, EmailJS "
              githubURL="https://github.com/zielinp/RGB-Guess-Game"
              demoURL="https://zielinp.github.io/RGB-Guess-Game/"
              video={test}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              title="Reflex Game"
              desc="Do you want to feel like in the Wild West? Try to score as many points as possible by hitting the target. You have 60 seconds and 3 lives."
              technologies="JavaScript, CSS, HTML"
              githubURL="https://github.com/zielinp/Reflex-Game"
              demoURL="https://zielinp.github.io/Reflex-Game/"
              video={test2}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              title="RGB Guess Game"
              desc="Simple game in which you have 3 tries to guess the RGB value of a drawn color. What will be your best score?"
              technologies="JavaScript, CSS, Bootstrap, HTML"
              githubURL="https://github.com/zielinp/RGB-Guess-Game"
              demoURL="https://zielinp.github.io/RGB-Guess-Game/"
              video={test2}
            />
          </Carousel.Item>
        </Carousel>
        {/* <button onClick={handlePrevButton}>PREV</button>
        <button onClick={handleNextButton}>NEXT</button> */}
      </div>
    </>
  )
}

export default Slider
