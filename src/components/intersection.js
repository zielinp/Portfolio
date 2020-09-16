import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import leaves_right from "../leaves_right2.png"

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${leaves_right});
  /* background-color: red; */
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  p {
    color: white;
    font-size: 2rem;
    padding: 0 1rem;
  }
`

function Intersection({ intersectionText }) {
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
    <PageContainer ref={page_container}>
      <p ref={text}>{intersectionText}</p>
    </PageContainer>
  )
}

export default Intersection
