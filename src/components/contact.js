import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

import marble from "../marble.jpg"
import frame2 from "../leaves_without_background_cropped2.png"
import resume from "../Paulina_Zielinska_resume.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faDownload } from "@fortawesome/free-solid-svg-icons"

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
`

const ContactBox = styled.div`
  background-color: white;
  width: 25rem;
  height: 22rem;
  /* border: 7px solid white; */
  z-index: 2;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 3rem;
 background-image:url(${marble})
  }
`

const TextBox = styled.div`
  /* background-color: #c5c5c5; */
  background-color: #e4e4e1;
  background-image: radial-gradient(
      at left center,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(143, 152, 157, 0.6) 100%
    );
  background-blend-mode: normal, multiply;

  padding: 2rem;
  width: 28rem;
  height: 28rem;
  margin-left: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  padding-left: 4rem;
  p {
    margin: 0;
    font-size: 1.25rem;
  }
  p:nth-of-type(1) {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  p:nth-of-type(2) {
    font-size: 1.25rem;
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p:nth-of-type(3) {
    margin-bottom: 1rem;
  }
  a {
    color: #212529;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    transition: transform 0.15s linear;
    :hover {
      transform: scale(1.1);
    }
  }

  div {
    min-width: 13rem;
    display: flex;
    /* border: 1px solid black; */
    /* flex-direction: row; */
    justify-content: space-between;
  }

  button {
    font-size: 1.25rem;
    color: #212529;
    border: 1px solid black;
    background-color: transparent !important;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    margin-bottom: 1rem;
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.15s linear;
    :hover {
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 1145px) {
    margin-left: 0;
  }
`

const Frame2 = styled.div`
  margin: 0;
  /* width: 100%;
  height: 100vh; */
  flex-grow: 1;
  height: 100vh;
  background-image: url(${frame2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  /* background-color: #87aac1; */
  margin-top: -85vh;
  overflow: hidden;
`

const DIV = styled.div`
  overflow: hidden;
  height: 100vh;
`

function Contact() {
  const page_container = React.createRef()
  const text_container = React.createRef()
  const image_container = React.createRef()
  const tl = gsap.timeline()

  gsap.defaults({ ease: "none" })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl.fromTo(
      [text_container.current, image_container.current],
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, ease: "easeInOut" },
      0
    )
    tl.to([text_container.current, image_container.current], {
      y: "-=200",
      opacity: 0,
    })

    ScrollTrigger.create({
      animation: tl,
      trigger: page_container.current,
      start: "top 155%", //top 25%
      end: "145%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [page_container, text_container, image_container])

  return (
    <>
      <DIV id="contact" ref={page_container}>
        <StyledBox>
          <ContactBox ref={image_container}>Get in touch with me</ContactBox>
          <TextBox ref={text_container}>
            <p>Paulina Zielińska</p>
            <p>zielinska.paulina@o2.pl</p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} size="1x" />
              <span> 503 597 350</span>
            </p>
            <div>
              <a href="https://www.linkedin.com/in/zielinp/" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                <span> Linkedin</span>
              </a>
              <a href="https://github.com/zielinp" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="1x" />
                <span> Github</span>
              </a>
            </div>
            <button>Leave me a message</button>

            <a href={resume} download>
              <FontAwesomeIcon icon={faDownload} size="1x" />
              <span> Download my Resume</span>
            </a>
          </TextBox>
        </StyledBox>

        <Frame2></Frame2>
      </DIV>
    </>
  )
}
export default Contact
