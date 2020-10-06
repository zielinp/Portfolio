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

export default function IndexRoute() {
  return (
    <Layout>
      <>
        <Navbar></Navbar>

        <Intro></Intro>

        <Video videoSrcURL="https://player.vimeo.com/video/462430915"></Video>
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
          intersectionText="Interested in learning more about me and my work?"
          position="left"
          transform={0}
        />

        <Contact></Contact>
      </>
    </Layout>
  )
}
