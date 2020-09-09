import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styled from "styled-components"

import image from "../image.jpg"

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background-color: red; */
`

const AboutContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TextContainer = styled.div`
  max-width: 40rem;
  display: flex;
  /* border: 1px dotted green; */
  margin: 0 2rem 0 2rem;
  flex-wrap: wrap;
  /* justify-content: center;
  align-items: center; */
  p {
    margin: 0;
    color: white;
    font-size: 1.25rem;
    /* font-weight: bold; */
  }
  p:first-of-type {
    font-size: 1.5rem;
    line-height: 3rem;
  }
  p:first-of-type:hover {
    color: red;
    transform: scale(1.1);
  }
`
const ImageContainer = styled.div`
  height: 24rem;
  width: 18rem;
  /* border: 1px dotted yellow; */
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
`
function About(props) {
  const du = React.createRef()

  //   gsap.defaults({ ease: "none", duration: 7 })
  gsap.defaults({ ease: "none" })
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // tl.fromTo(
    //   du.current,
    //   1,
    //   { y: "+=100", opacity: 0, scale: 0.5 },
    //   {
    //     y: "0",
    //     opacity: 1,
    //     stagger: 0.2,
    //     duration: 1,
    //     ease: "easeInOut",
    //     scale: 5,
    //   }
    // )

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: du.current,
    //   start: "top top",
    //   end: "+=1000",
    // })
  }, [du])

  return (
    <>
      <PageContainer ref={du}>
        <AboutContainer>
          <ImageContainer></ImageContainer>
          <TextContainer>
            <p>Hello!</p>
            <p>
              My name is Paulina. I graduated from Automation and Robotics at
              the Warsaw University of Technology, but my heart was stolen by
              frontend programming. I really like getting to know new
              technologies, I enjoy learning and watching my progress. I have my
              first commercial projects behind me, but I would like to spread my
              wings and set off on a beautiful cruise like in a song by
              Krawczyk.
            </p>{" "}
            <p>
              In my free time, I train amateur powerlifting and spend time in
              nature with my dog, a charming mongrel that resembles a miniature
              version of the Old German Shepherd Dog.
            </p>
          </TextContainer>
        </AboutContainer>
      </PageContainer>
    </>
  )
}

export default About
