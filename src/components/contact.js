import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

import marble from "../marble.jpg"
// import resume from "../Paulina_Zielinska_resume.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faPhone,
  faDownload,
  faTimes,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "leaves_without_background_croppedss.png" }
        ) {
          childImageSharp {
            fluid(quality: 90) {
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
        <BackgroundImage
          // Tag="section"
          className={className}
          fluid={imageData}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const DIV = styled(BackgroundSection)`
  overflow: hidden;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
`

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
`

const ContactBox = styled.div`
  /* background-color: white; */
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
  padding: 2rem;
  width: 28rem;
  height: 28rem;
  margin-left: -5rem;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  padding-left: 4rem;
  border: 3px solid white;

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
      transform: scale(1.1);
    }
  }
  p:nth-of-type(1) {
    font-size: 2rem;

    margin-bottom: 1rem;
    @media only screen and (max-width: 450px) {
      font-size: 1.75rem;
      margin-top: 3.5rem;
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
  }
  a {
    color: #212529;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    transition: transform 0.15s linear;
    color: var(--textNormal);
    text-align: center;
    :hover {
      transform: scale(1.1);
    }
    span {
      color: var(--textNormal);
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

    border: 2px solid white;
    background-color: transparent;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    margin-bottom: 1rem;
    transition: transform 0.25s linear;
    color: var(--textNormal);
    :hover {
      box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      background-color: rgba(255, 255, 255, 0.25);
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 905px) {
    margin-left: 0;
  }
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
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));

  border: 3px solid white;
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
    color: white;
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
      transform: scale(1.2);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 450px) {
      margin-top: 1.5rem;
    }

    input {
      font-family: "Roboto", sans-serif !important;
      width: 18rem;
      background-color: rgba(255, 255, 255, 0.25);
      border: none;
      border: 2px solid white;
      margin-bottom: 1.5rem;
      padding: 0.5rem 1rem;
      box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      color: white;
      font-size: 1rem;

      @media only screen and (max-width: 450px) {
        margin-bottom: 1rem;
      }
    }

    textarea {
      font-family: "Roboto", sans-serif !important;
      width: 18rem;
      background-color: rgba(255, 255, 255, 0.25);
      border: none;
      border: 2px solid white;
      box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      margin-bottom: 1.5rem;
      padding: 0.5rem 1rem;
      color: white;
      @media only screen and (max-width: 450px) {
        margin-bottom: 1rem;
      }
    }

    button {
      background-color: transparent;
      border: 2px solid white;
      color: var(--textNormal);
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      width: 10rem;
      transition: transform 0.15s linear;
      font-size: 1rem;
      :hover {
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
        background-color: rgba(255, 255, 255, 0.25);
        color: white;
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
      <div id="contact" ref={page_container}>
        <DIV>
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
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                />
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
        </DIV>
      </div>
    </>
  )
}
export default Contact
