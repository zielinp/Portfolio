import React, { useEffect } from "react"
import Slider from "react-animated-slider"
import Slide from "./slide"
import "react-animated-slider/build/horizontal.css"

import test from "../test.mp4"
import test2 from "../test2.mp4"

import styled from "styled-components"

const PageContainer = styled.div`
  height: 100vh;

  .slider {
    height: 100%;

    .nextButton,
    .previousButton {
      svg {
        polygon {
          fill: white;
        }
      }
    }
  }
`

function CustomSlider() {
  return (
    <PageContainer id="projects">
      <Slider touchDisabled={true}>
        <div>
          <Slide
            title="Rest Countries API"
            desc="Are you good at geography? In this app you can find the most important information about the country of your choice. Search by name, filter by regions, check bordering countries, currency and many more."
            technologies="Gatsby, React, JSX, Rest API"
            githubURL="https://github.com/zielinp/REST-Countries-API"
            demoURL="https://zielinp-countries.netlify.app/"
            video={test}
          />
        </div>
        <div>
          <Slide
            title="React Shopping App"
            desc="Online shopping? Sure! Choose the products, add to the basket and receive an order summary in the e-mail. You can also subscribe to the newsletter or learn more about the store."
            technologies="React, Redux, Materialize, EmailJS "
            githubURL="https://github.com/zielinp/RGB-Guess-Game"
            demoURL="https://zielinp.github.io/RGB-Guess-Game/"
            video={test}
          />
        </div>
        <div>
          <Slide
            title="Reflex Game"
            desc="Do you want to feel like in the Wild West? Try to score as many points as possible by hitting the target. You have 60 seconds and 3 lives."
            technologies="JavaScript, CSS, HTML"
            githubURL="https://github.com/zielinp/Reflex-Game"
            demoURL="https://zielinp.github.io/Reflex-Game/"
            video={test2}
          />
        </div>
        <div>
          <Slide
            title="RGB Guess Game"
            desc="Simple game in which you have 3 tries to guess the RGB value of a drawn color. What will be your best score?"
            technologies="JavaScript, CSS, Bootstrap, HTML"
            githubURL="https://github.com/zielinp/RGB-Guess-Game"
            demoURL="https://zielinp.github.io/RGB-Guess-Game/"
            video={test2}
          />
        </div>
      </Slider>
    </PageContainer>
  )
}

export default CustomSlider
