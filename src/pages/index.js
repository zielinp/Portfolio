import React from "react"
import { PageProps } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

import ParallaxImage from "../components/parallaximage"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import GSAPComponent from "../components/gsap_test"
import About from "../components/about"
export default function IndexRoute() {
  return (
    <Layout>
      <>
        <Navbar></Navbar>
        <GSAPComponent></GSAPComponent>
        <About></About>
      </>
    </Layout>
  )
}
