import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

import html from "../images/html.png"
import css3 from "../images/css3.png"
import sass from "../images/sass.png"
import js from "../images/js.png"
import jq from "../images/jq.png"

import bootstrap from "../images/bootstrap.png"
import materialize from "../images/materialize.png"
import react from "../images/react.png"
import gatsby from "../images/gatsby.png"

import yarn from "../images/yarn.png"
import npm from "../images/npm.png"

import figma from "../images/figma.png"
import Xd from "../images/Xd.png"
import vsc from "../images/vsc.png"

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Col = styled.div`
  min-width: 15rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 6rem;
    max-height: 6rem;
    border: 1px solid black;
    margin-bottom: 1.5rem;
    transition: transform 0.15s linear;
  }
  img:hover {
    color: white;
    transform: scale(1.1);
  }
  img:nth-of-type(1) {
    margin-top: 4rem;
  }
`

function Skills() {
  return (
    <>
      <PageContainer id="skills">
        <SkillsContainer>
          <Col>
            <img src={html}></img>
            <img src={css3}></img>
            <img src={sass}></img>
            <img src={js}></img>
            <img src={jq}></img>
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
