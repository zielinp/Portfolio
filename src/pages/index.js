import React from "react"
import Video from "../components/video"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Intro from "../components/intro"
import About from "../components/about"
import Slider from "../components/slider"
import Intersection from "../components/intersection"
import Contact from "../components/contact"

export default function IndexRoute() {
  return (
    <Layout>
      <>
        <Navbar></Navbar>
        <Intro></Intro>

        <Video videoSrcURL="https://www.youtube.com/embed/sD9gTAFDq40"></Video>
        <About></About>
        <Intersection intersectionText="Scroll down to see my projects"></Intersection>
        <Slider></Slider>
        <Intersection intersectionText="I am also familiar with technologies like"></Intersection>
        <About></About>
        <Contact></Contact>
      </>
    </Layout>
  )
}
