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
    }).to(
      frame2.current,
      3,
      { xPercent: 50, yPercent: 50, scale: 5, opacity: 0 },
      "-=3"
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
  }, [frame, frame2, d])

  return (
    <>
      <div ref={d}>
        <Frame ref={frame}></Frame>
        <Frame2 ref={frame2}></Frame2>
      </div>
    </>
  )
}

export default GSAPComponent

// function GSAPComponent(props) {
//   const header = React.createRef()

//   useEffect(() => {
//     gsap.to(header.current, { color: "#8c0", duration: 6 })
//   }, [header])

//   return (
//     <>
//       <h1 ref={header}>Hello GSAP</h1>
//     </>
//   )
// }
