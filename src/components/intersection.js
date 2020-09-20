import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import leaves_right from "../leaves_right2.png"

const PageContainer = styled.div.attrs(props => ({
  image: props.image,
  position: props.position,
}))`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.image});
  /* background-color: red; */
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: contain;
  p {
    color: white;
    font-size: 2rem;
    padding: 0 1rem;
    @media only screen and (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }
`

function Intersection({ intersectionText, image, position }) {
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
    <PageContainer image={image} position={position} ref={page_container}>
      <p ref={text}>{intersectionText}</p>
    </PageContainer>
  )
}

export default Intersection
