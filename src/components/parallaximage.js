import React from "react"
import styled from "styled-components"

import frame from "../leaves_without_background_cropped.png"
import frame2 from "../leaves_without_background_cropped2.png"

import { Parallax } from "react-scroll-parallax"

// type ParallaxProps = {
//   urlString: string
// }

const Frame = styled.div`
  border: 1px solid black;
  /* width: 100%; */
  margin: 0;
  height: 100vh;
  background-image: url(${frame});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: left;
`

const Frame2 = styled.div`
  border: 1px solid black;
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

const ParallaxImage = () => (
  <>
    <Parallax x={["200px", "-200px"]} y={["200px", "-200px"]}>
      <Frame></Frame>
    </Parallax>
    <Parallax x={["-200px", "200px"]} y={["-200px", "200px"]}>
      {/* <Parallax x={["-700px", "700px"]} y={["-70px", "70px"]}> */}
      <Frame2></Frame2>
    </Parallax>
  </>
)
export default ParallaxImage
