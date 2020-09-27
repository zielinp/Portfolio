import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

import html from "../images/html.png"
import css3 from "../images/css3.png"
import sass from "../images/sass.png"
import js from "../images/js.png"

import bootstrap from "../images/bootstrap.png"
import materialize from "../images/materialize.png"
import react from "../images/react2.png"
import gatsby from "../images/gatsby.png"

import yarn from "../images/yarn.png"
import npm from "../images/npm.png"
import github from "../images/github.png"

import figma from "../images/figma.png"
import Xd from "../images/Xd.png"
import vsc from "../images/vsc.png"

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  flex-grow: 2;
`

const Col = styled.div`
  min-width: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 960px) {
    min-width: 10em;
  }
  img {
    max-width: 7rem;
    max-height: 7rem;
    margin-bottom: 1.5rem;
    transition: transform 0.15s linear;
    @media only screen and (max-width: 660px) {
      max-width: 5rem;
      max-height: 5rem;
    }
    @media only screen and (max-width: 425px) {
      max-width: 4rem;
      max-height: 4rem;
      margin-bottom: 1rem;
    }
  }
  img:hover {
    transform: scale(1.1);
  }
  img:nth-of-type(1) {
    margin-top: 4rem;
    @media only screen and (max-width: 960px) {
      margin-top: 1rem;
    }
    @media only screen and (max-width: 425px) {
      margin-top: 0rem;
    }
  }
`

function Skills() {
  const page_container = React.createRef()
  const text = React.createRef()

  gsap.defaults({ ease: "none" })
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl.fromTo(
      text.current,
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, ease: "easeInOut" }
    )
    tl.to(text.current, { y: "-=200", opacity: 0 })

    ScrollTrigger.create({
      animation: tl,
      trigger: page_container.current,
      start: "top 155%", //top 25%
      end: "145%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [page_container, text])

  return (
    <>
      <PageContainer id="skills" ref={page_container}>
        <SkillsContainer ref={text}>
          <Col>
            <img src={html}></img>
            <img src={css3}></img>
            <img src={sass}></img>
            <img src={js}></img>
          </Col>
          <Col>
            <img src={bootstrap}></img>
            <img src={materialize}></img>
            <img src={react}></img>
            <img src={gatsby}></img>
          </Col>
          <Col>
            <img src={yarn}></img>
            <img src={npm}></img>
            <img src={github}></img>
          </Col>
          <Col>
            <img src={vsc}></img>
            <img src={figma}></img>
            <img src={Xd}></img>
          </Col>
        </SkillsContainer>
      </PageContainer>
    </>
  )
}
export default Skills
