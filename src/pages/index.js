import React from "react"
import Video from "../components/video"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Intro from "../components/intro"
import About from "../components/about"
import Intersection from "../components/intersection"
import Contact from "../components/contact"
import Skills from "../components/skills"
import CustomSlider from "../components/customslider"

import StyledBackgroundSection from "../components/test"

export default function IndexRoute() {
  return (
    <Layout>
      <>
        <Navbar></Navbar>

        <Intro></Intro>
        {/* <StyledBackgroundSection></StyledBackgroundSection> */}
        <Video videoSrcURL="https://www.youtube.com/embed/sD9gTAFDq40"></Video>
        <About></About>
        <Intersection
          intersectionText="Scroll down to see my projects"
          position="left"
          transform={0}
        />
        <CustomSlider></CustomSlider>
        <Intersection
          intersectionText="I am also familiar with technologies like"
          position="left"
          transform={-180}
        />
        <Skills></Skills>
        <Intersection
          intersectionText="Still interested?"
          position="left"
          transform={0}
        />

        <Contact></Contact>
      </>
    </Layout>
  )
}
