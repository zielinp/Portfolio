import React, { useEffect } from "react"
import Slider from "react-animated-slider"
import Slide from "./slide"
import "react-animated-slider/build/horizontal.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import rgb_video from "../rgb-video.mp4"
import reflex_video from "../reflex-video.mp4"
import countries_video from "../countries-video.mp4"
import shop_video from "../shop-video.mp4"

import styled from "styled-components"

const PageContainer = styled.div`
  height: 100vh;

  .slider {
    height: 100%;

    div.slide-div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .nextButton,
    .previousButton {
      svg {
        @media only screen and (max-width: 425px) {
          transform: scale(0.7);
        }

        polygon {
          fill: white;
        }
      }
    }
  }
`

function CustomSlider() {
  const page_container = React.createRef()
  const slide_1 = React.createRef()
  const slide_2 = React.createRef()
  const slide_3 = React.createRef()
  const slide_4 = React.createRef()
  const tl3 = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl3.fromTo(
      [slide_1.current, slide_2.current, slide_3.current, slide_4.current],
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, ease: "easeInOut" },
      0
    )
    tl3.to(
      [slide_1.current, slide_2.current, slide_3.current, slide_4.current],
      {
        y: "-=200",
        opacity: 0,
      }
    )

    ScrollTrigger.create({
      animation: tl3,
      trigger: page_container.current,
      start: "top 155%", //top 25%
      end: "155%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [page_container, slide_1, slide_2, slide_3, slide_4])

  return (
    <PageContainer id="projects" ref={page_container}>
      <Slider touchDisabled={true} duration={1700}>
        <div className="slide-div" ref={slide_1}>
          <Slide
            title="Rest Countries API"
            desc="Are you good at geography? In this app you can find the most important information about the country of your choice. Search by name, filter by regions, check bordering countries, currency and many more."
            technologies="Gatsby, React, JSX, Rest API"
            githubURL="https://github.com/zielinp/REST-Countries-API"
            demoURL="https://zielinp-countries.netlify.app/"
            video={countries_video}
          />
        </div>
        <div className="slide-div" ref={slide_2}>
          <Slide
            title="React Shopping App"
            desc="Online shopping? Sure! Choose the products, add to the basket and receive an order summary in the e-mail. You can also subscribe to the newsletter or learn more about the store."
            technologies="React, Redux, Materialize, EmailJS "
            githubURL="https://github.com/zielinp/React-Shopping-App"
            demoURL="https://zielinp.github.io/React-Shopping-App/"
            video={shop_video}
          />
        </div>
        <div className="slide-div" ref={slide_3}>
          <Slide
            title="Reflex Game"
            desc="Do you want to feel like in the Wild West? Try to score as many points as possible by hitting the target. You have 60 seconds and 3 lives."
            technologies="JavaScript, CSS, HTML"
            githubURL="https://github.com/zielinp/Reflex-Game"
            demoURL="https://zielinp.github.io/Reflex-Game/"
            video={reflex_video}
          />
        </div>
        <div className="slide-div" ref={slide_4}>
          <Slide
            title="RGB Guess Game"
            desc="Simple game in which you have 3 tries to guess the RGB value of a drawn color. What will be your best score?"
            technologies="JavaScript, CSS, Bootstrap, HTML"
            githubURL="https://github.com/zielinp/RGB-Guess-Game"
            demoURL="https://zielinp.github.io/RGB-Guess-Game/"
            video={rgb_video}
          />
        </div>
      </Slider>
    </PageContainer>
  )
}

export default CustomSlider
