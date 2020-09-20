import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

import marble from "../marble.jpg"
import frame2 from "../leaves_without_background_cropped2.png"
// import resume from "../Paulina_Zielinska_resume.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faPhone,
  faDownload,
  faTimes,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"

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
  background-image: url(${marble});
  @media only screen and (max-width: 905px) {
    margin-bottom: -3rem;
    /* width: 22rem; */
    height: 22rem;
  }

  @media only screen and (max-width: 550px) {
    width: 18rem;
    height: 18rem;
    font-size: 1.75rem;
    margin-bottom: -3rem;
  }
  @media only screen and (max-width: 450px) {
    width: 16rem;
    height: 16rem;
    font-size: 1.75rem;
    margin-bottom: -3rem;
  }
`

const TextBox = styled.div.attrs(props => ({
  display: props.display,
}))`
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
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  padding-left: 4rem;

  @media only screen and (max-width: 450px) {
    width: 28rem;
    height: 22rem;
    padding-left: 2rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    transition: transform 0.15s linear;
    :hover {
      color: black;
      transform: scale(1.1);
    }
  }
  p:nth-of-type(1) {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 450px) {
      font-size: 1.75rem;
      margin-top: 2rem;
    }
  }
  p:nth-of-type(2) {
    font-size: 1.25rem;
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p:nth-of-type(3) {
    margin-bottom: 1rem;
    span:hover {
      color: black;
    }
  }
  a {
    color: #212529;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    transition: transform 0.15s linear;
    color: var(--textNormal);
    :hover {
      color: black;
      transform: scale(1.1);
    }
    span {
      color: var(--textNormal);
      :hover {
        color: black;
      }
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
    color: var(--textNormal);
    :hover {
      color: black;
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 905px) {
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
  /* @media only screen and (max-width: 905px) {
    height: 115vh;
  } */
  /* // dorobic medi queries  */
`

const StyledForm = styled.div.attrs(props => ({
  display: props.display,
}))`
  display: ${props => props.display};
  flex-shrink: 2;
  justify-content: center;
  align-items: center;
  margin-left: -5rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  width: 28rem;
  height: 28rem;
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
  padding: 4rem;
  padding-left: 8rem;
  position: relative;
  @media only screen and (max-width: 905px) {
    margin-left: 0;
    /* padding-left: 4rem; */
    padding: 1rem;
  }

  @media only screen and (max-width: 450px) {
    width: 28rem;
    height: 22rem;
    padding-top: 3rem;
  }

  div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.15s linear;
    :hover {
      color: black;
      transform: scale(1.2);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      font-family: "Roboto", sans-serif !important;
      width: 18rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    textarea {
      font-family: "Roboto", sans-serif !important;
      width: 18rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button {
      background-color: transparent;
      border: 1px solid black;
      color: var(--textNormal);
      font-weight: bold;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      width: 10rem;
      transition: transform 0.15s linear;
      :hover {
        color: black;
        transform: scale(1.05);
      }
    }
  }
`

function Contact() {
  const page_container = React.createRef()
  const text_container = React.createRef()
  const image_container = React.createRef()
  const tl = gsap.timeline()

  const [displayText, setDisplayText] = useState("flex")
  const [displayForm, setDisplayForm] = useState("none")

  function showForm() {
    setDisplayText("none")
    setDisplayForm("flex")
  }
  function showText() {
    setDisplayText("flex")
    setDisplayForm("none")
  }

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
      end: "155%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [])

  return (
    <>
      <DIV id="contact" ref={page_container}>
        <StyledBox>
          <ContactBox ref={image_container}>Get in touch with me</ContactBox>
          <TextBox display={displayText} ref={text_container}>
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
            <button onClick={showForm}>Leave me a message</button>

            <a href={marble} download>
              <FontAwesomeIcon icon={faDownload} size="1x" />
              <span> Download my Resume</span>
            </a>
          </TextBox>
          <StyledForm display={displayForm}>
            <div onClick={showText}>
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>

            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <input placeholder="Name" type="text" name="name" id="name" />
              <input placeholder="Email" type="email" name="email" id="email" />
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                rows="5"
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} size="1x" />
                <span> Send</span>
              </button>
            </form>
          </StyledForm>
        </StyledBox>

        <Frame2></Frame2>
      </DIV>
    </>
  )
}
export default Contact
