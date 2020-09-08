import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import frame from "../leaves_without_background_cropped.png"
import frame2 from "../leaves_without_background_cropped2.png"

const Frame = styled.div`
  /* width: 100%; */
  margin: 0;
  height: 100vh;
  background-image: url(${frame});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: left;
`

const Frame2 = styled.div`
  width: 100%;
  margin: 0;
  height: 100vh;
  background-image: url(${frame2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  margin-top: -100vh;
`
const MainText = styled.div`
  color: #e5e5e5;
  font-size: 4rem;
  position: absolute;
  top: calc(50vh - 4rem);
  width: 100%;
  text-align: center;
  p {
    font-size: 2rem;
    color: #e5e5e5;
    margin: 0;
  }
`
const PageContainer = styled.div`
  /* display: "flex";
  align-items: center;
  justify-content: center;
  border: 1px solid black; */
`

function GSAPComponent(props) {
  const frame = React.createRef()
  const frame2 = React.createRef()
  const d = React.createRef()
  const title = React.createRef()

  //   gsap.defaults({ ease: "none", duration: 7 })
  gsap.defaults({ ease: "none" })
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl.to(frame.current, 3, {
      xPercent: -50,
      yPercent: -50,
      scale: 5,
      opacity: 0,
    })
    tl.to(
      frame2.current,
      3,
      { xPercent: 50, yPercent: 50, scale: 5, opacity: 0 },
      0
    )
    tl.to(
      title.current,
      3,
      {
        opacity: 0,
        scale: 3,
      },
      0
    )

    ScrollTrigger.create({
      animation: tl,
      trigger: d.current,
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    })
  }, [frame, frame2, d, title])

  return (
    <>
      <PageContainer ref={d}>
        <Frame ref={frame}></Frame>
        <Frame2 ref={frame2}></Frame2>
        <MainText ref={title}>
          Hermiona Granger
          <p>Frontend Developer</p>
        </MainText>
      </PageContainer>
    </>
  )
}

export default GSAPComponent
