import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "leaves_leftss.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const PageContainer = styled(BackgroundSection).attrs(props => ({
  position: props.position,
  transform: props.transform,
}))`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-position: ${props => props.position};
  transform: rotate(${props => props.transform}deg);
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: 425px) {
    height: 75vh;
  }

  p {
    color: white;
    font-size: 2rem;
    padding: 0 1rem;
    transform: rotate(${props => props.transform}deg);
    @media only screen and (max-width: 1000px) {
      font-size: 1.5rem;
    }
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  }
`

function Intersection({ intersectionText, transform, position }) {
  const page_container = React.createRef()
  const text = React.createRef()

  gsap.defaults({ ease: "none" })
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl.fromTo(
      text.current,
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, ease: "easeInOut" }
    )
    tl.to(text.current, { y: "-=200", opacity: 0 })

    ScrollTrigger.create({
      animation: tl,
      trigger: page_container.current,
      start: "top 155%", //top 25%
      end: "145%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [page_container, text])

  return (
    <PageContainer
      position={position}
      transform={transform}
      ref={page_container}
    >
      <p ref={text}>{intersectionText}</p>
    </PageContainer>
  )
}

export default Intersection
