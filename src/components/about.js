import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import image from "../images/image_1.jpg"
import image2 from "../images/image_2.jpg"

const PageContainer = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
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

  @media only screen and (max-width: 1000px) {
    margin: 0 2rem 0 2rem;
  }

  p {
    margin: 0;
    color: white;
    font-size: 1.25rem;
    line-height: 1.5rem;
    /* font-weight: bold; */
    text-align: justify;

    @media only screen and (max-width: 426px) {
      font-size: 1.05rem;
      line-height: 1.15rem;
    }
  }
  p:first-of-type {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 1000px) {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }
    @media only screen and (max-width: 426px) {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }

  p:nth-of-type(2) {
    margin-bottom: 1rem;
    padding-right: 2rem;
    @media only screen and (max-width: 1000px) {
      padding-right: 0;
    }
  }
  p:nth-of-type(3) {
    padding-right: 2rem;
    @media only screen and (max-width: 1000px) {
      padding-right: 0;
    }
  }
`

const ImageContainer = styled.div`
  height: 24rem;
  width: 18rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 1000px) {
    height: 20rem;
    width: 15rem;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 426px) {
    height: 14rem;
    width: 14rem;
    margin-bottom: 1rem;
  }

  img {
    position: absolute;
    left: 0;
    height: 24rem;
    width: 18rem;
    border-radius: 10px;
    transition: opacity 1.5s ease-in-out;

    @media only screen and (max-width: 1000px) {
      height: 20rem;
      width: 15rem;
    }

    @media only screen and (max-width: 426px) {
      height: 14rem;
      width: 14rem;
      object-fit: cover;
    }
    :nth-of-type(1) {
      z-index: 10;
    }
    :nth-of-type(1):hover {
      opacity: 0;
    }
  }
`

function About({ data }) {
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
            <img src={image}></img>
            <img src={image2}></img>
          </ImageContainer>
          <TextContainer ref={text_container}>
            <p>Hello!</p>
            <p>
              My name is Paulina. I graduated from Automation and Robotics at
              the Warsaw University of Technology, but my heart was stolen by
              frontend programming. I really like getting to know new web
              development technologies, I enjoy learning and watching my
              progress. I was involved in several commercial projects. Now I am
              in search for great opportunities to use my skills in creating
              high-quality websites.
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
