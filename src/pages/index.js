import React from "react"
import Video from "../components/video"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import GSAPComponent from "../components/gsap_test"
import About from "../components/about"
import Slider from "../components/slider"

export default function IndexRoute() {
  return (
    <Layout>
      <>
        <Navbar></Navbar>
        <GSAPComponent></GSAPComponent>

        <Video videoSrcURL="https://www.youtube.com/embed/sD9gTAFDq40"></Video>
        <About></About>
        <Slider></Slider>
      </>
    </Layout>
  )
}
