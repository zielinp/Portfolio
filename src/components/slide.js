import React from "react"
import styled from "styled-components"
import test from "../test.mp4"

const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
  @media only screen and (max-width: 1145px) {
    height: auto;
  }
`

// const ImageBox = styled.div.attrs(props => ({
//   image: props.image,
// }))`
//   background-color: white;
//   background-image: url(${props => props.image});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
//   width: 36rem;
//   height: 22rem;
//   border: 7px solid white;
//   z-index: 2;
//   filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
// `

const ImageBox = styled.div`
  background-color: white;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 40rem;
  /* margin: 0 1rem; */

  video {
    width: 100%;
    max-height: 24rem;
  }

  border: 7px solid white;
  z-index: 2;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
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
  width: 30rem;
  max-height: 28rem;
  margin-left: -5rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 1145px) {
    margin-left: 0;
    width: 65%;
  }
  @media only screen and (max-width: 706px) {
    width: 100%;
  }
  @media only screen and (max-width: 576px) {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.p`
  font-size: 1.85rem;
  font-weight: bold;
  padding-left: 5rem;
  margin-top: 2rem;
  span {
    position: relative;
    span {
      position: absolute;
      left: 0.5rem;
      top: -0.5rem;
      height: 150%;
      width: 100%;
      display: inline-block;
      /* background-color: #fffafa; */
      z-index: -2;
    }
  }

  @media only screen and (max-width: 1145px) {
    text-align: center;
    padding-left: 0;
    margin-top: 0rem;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1.25rem;
    /* margin-top: 0.5rem; */
  }
`

const Desc = styled.p`
  color: #000000;
  /* text-align: center; */
  padding-left: 5rem;
  padding-right: 1rem;
  font-size: 1.15rem;

  @media only screen and (max-width: 1145px) {
    padding-left: 0;
    padding-right: 0rem;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`

const Technologies = styled.div`
  padding-left: 5rem;
  padding-right: 1rem;
  span {
    color: black;
    margin: 0;
    line-height: 1.5rem;
  }

  span:first-of-type {
    font-weight: bold;
  }
  @media only screen and (max-width: 1145px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    /* margin-top: 0.5rem; */
    padding-right: 0;
  }
`

const Links = styled.div`
  margin-top: 1rem;
  padding-left: 5rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: space-between !important;
  padding-right: 1rem;
  @media only screen and (max-width: 1145px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-right: 0;
    padding-right: 0;
    width: 100%;
  }
`

const DemoURL = styled.a`
  font-weight: bold;
  border: 1px solid black;
  text-decoration: none;
  margin-bottom: 1rem;
  color: var(--textNormal);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  transition: transform 0.15s linear;
  text-align: center;

  :hover {
    transform: scale(1.1);
    color: black;
    text-decoration: none;
  }
`

const GithubURL = styled.a`
  font-weight: bold;
  border: 1px solid black;
  text-decoration: none;
  margin-bottom: 1rem;
  color: var(--textNormal);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  transition: transform 0.15s linear;
  text-align: center;
  :hover {
    transform: scale(1.1);
    color: black;
    text-decoration: none;
  }
`

function Slide({
  title,
  desc,
  technologies,
  githubURL,
  demoURL,
  image,
  video,
}) {
  return (
    <>
      <StyledSlide>
        <ImageBox>
          <video loop={true} autoPlay muted>
            <source src={video} />
          </video>
        </ImageBox>
        <TextBox>
          <Title>
            <span>
              {title} <span></span>
            </span>
          </Title>
          <Desc>{desc}</Desc>
          <Technologies>
            <span>Technologies used: </span>
            <span>{technologies}</span>
          </Technologies>

          <Links>
            <DemoURL target="_blank" href={demoURL}>
              Demo
            </DemoURL>
            <GithubURL target="_blank" href={githubURL}>
              Code
            </GithubURL>
          </Links>
        </TextBox>
      </StyledSlide>
    </>
  )
}
export default Slide
