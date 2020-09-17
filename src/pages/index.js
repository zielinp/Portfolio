import React from "react"
import Video from "../components/video"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Intro from "../components/intro"
import About from "../components/about"
import Slider from "../components/slider"
import Intersection from "../components/intersection"
import Contact from "../components/contact"
import Skills from "../components/skills"

import leaves_right from "../leaves_right2.png"
import leaves_left from "../leaves_left2.png"

export default function IndexRoute() {
  return (
    <Layout>
      <>
        <Navbar></Navbar>
        <Intro></Intro>

        <Video videoSrcURL="https://www.youtube.com/embed/sD9gTAFDq40"></Video>
        <About></About>
        <Intersection
          intersectionText="Scroll down to see my projects"
          image={leaves_right}
          position="right"
        />
        <Slider></Slider>
        <Intersection
          intersectionText="I am also familiar with technologies like"
          image={leaves_left}
          position="left"
        />
        <Skills></Skills>
        <Contact></Contact>
      </>
    </Layout>
  )
}
