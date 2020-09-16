import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import image from "../image.jpg"
import image2 from "../image2.jpg"

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background-color: red; */
`

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

const TextContainer = styled.div`
  max-width: 40rem;
  display: flex;
  margin: 0 3rem 0 3rem;
  flex-wrap: wrap;
  /* justify-content: center;
  align-items: center; */
  p {
    margin: 0;
    color: white;
    font-size: 1.25rem;
    /* font-weight: bold; */
  }
  p:first-of-type {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

  p:nth-of-type(2) {
    margin-bottom: 1rem;
    padding-right: 2rem;
  }
  p:nth-of-type(3) {
    padding-right: 2rem;
  }
`

const ImageContainer = styled.div`
  height: 24rem;
  width: 18rem;
  /* border-radius: 10px; */
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  /* background-image: url(${image}); */
  /* background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center; */
  img {
    position: absolute;
    left: 0;
    height: 24rem;
    width: 18rem;
    border-radius: 10px;
    transition: opacity 1.5s ease-in-out;

    :nth-of-type(2):hover {
      opacity: 0;
    }
  }
`

function About(props) {
  const page_container = React.createRef()
  const text_container = React.createRef()
  const image_container = React.createRef()
  const tl = gsap.timeline()

  gsap.defaults({ ease: "none" })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl.fromTo(
      [text_container.current, image_container.current],
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, ease: "easeInOut" },
      0
    )
    tl.to([text_container.current, image_container.current], {
      y: "-=200",
      opacity: 0,
    })

    ScrollTrigger.create({
      animation: tl,
      trigger: page_container.current,
      start: "top 155%", //top 25%
      end: "145%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [page_container, text_container, image_container])

  return (
    <>
      <PageContainer ref={page_container}>
        <AboutContainer>
          <ImageContainer ref={image_container}>
            <img src={image2}></img>
            <img src={image}></img>
          </ImageContainer>
          <TextContainer ref={text_container}>
            <p>Hello!</p>
            <p>
              My name is Paulina. I graduated from Automation and Robotics at
              the Warsaw University of Technology, but my heart was stolen by
              frontend programming. I really like getting to know new
              technologies, I enjoy learning and watching my progress. I have my
              first commercial projects behind me, but I would like to spread my
              wings and create the highest quality websites.
            </p>{" "}
            <p>
              In my free time, I train amateur powerlifting and spend time in
              nature with my dog, a charming mongrel called Luna.
            </p>
          </TextContainer>
        </AboutContainer>
      </PageContainer>
    </>
  )
}

export default About
