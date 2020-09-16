import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import frame from "../leaves_without_background_cropped.png"
import frame2 from "../leaves_without_background_cropped2.png"

const Frame = styled.div`
  max-width: 100%;
  margin: 0;
  flex-grow: 1;
  height: 100vh;
  background-image: url(${frame});
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: blue; */
  background-position-x: left;
  overflow: hidden;
`

const Frame2 = styled.div`
  margin: 0;
  /* width: 100%;
  height: 100vh; */
  flex-grow: 1;
  height: 100vh;
  background-image: url(${frame2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  /* background-color: #87aac1; */
  margin-top: -100vh;
  overflow: hidden;
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
  /* display: flex; */
  /* align-items: center;
  justify-content: center;
  border: 1px solid black; * */
  overflow: hidden;
  /* border: 1px solid blue; */
`

const MouseScroll = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    margin: 0 auto;
    display: block;
    border-radius: 50px;
    border: 2px solid #fff;
    height: 75px;
    width: 37px;
    position: relative;
    span {
      position: absolute;
      background-color: #fff;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
      animation: move 4s linear infinite;
    }
  }

  @keyframes move {
    0% {
      transform: translate(-50%, 10px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 40px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 80px);
      opacity: 0;
    }
  }
`

function Intro(props) {
  const frame = React.createRef()
  const frame2 = React.createRef()
  const d = React.createRef()
  const title = React.createRef()
  const mouse = React.createRef()

  //   gsap.defaults({ ease: "none", duration: 7 })
  gsap.defaults({ ease: "none" })
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl.to(frame.current, {
      xPercent: -3,
      yPercent: -3,
      scale: 3,
      opacity: 0,
    })
    tl.to(
      frame2.current,

      { xPercent: 3, yPercent: 3, scale: 3, opacity: 0 },
      0
    )
    tl.to(
      title.current,
      {
        opacity: 0,
        scale: 2,
      },
      0
    )

    tl.to(
      mouse.current,
      {
        opacity: 0,
      },
      0
    )

    ScrollTrigger.create({
      animation: tl,
      trigger: d.current,
      start: "top top",
      end: "+=1800",
      scrub: 0.5,
      pin: true,
      // anticipatePin: 0,
      // markers: true,
      // pinSpacing: true,
    })
  }, [frame, frame2, d, title, mouse])

  return (
    <>
      <PageContainer ref={d}>
        <Frame ref={frame}></Frame>
        <Frame2 ref={frame2}></Frame2>
        <MainText ref={title}>
          Hermiona Granger
          <p>Frontend Developer</p>
        </MainText>
        <MouseScroll ref={mouse}>
          <span>
            <span></span>
          </span>
        </MouseScroll>
      </PageContainer>
    </>
  )
}

export default Intro