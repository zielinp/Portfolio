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
  padding: 2rem;
  width: 28rem;
  max-height: 28rem;
  /* margin-left: -5rem; */

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

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
  /* padding-left: 5rem; */
  /* margin-top: 2rem; */
  text-align: center;

  @media only screen and (max-width: 1145px) {
    padding-left: 0;
    margin-top: 0rem;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1.25rem;
    /* margin-top: 0.5rem; */
  }
`

const Desc = styled.p`
  text-align: justify;
  /* padding-left: 5rem; */
  /* padding-right: 1rem; */
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
  text-align: justify;
  span {
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
  /* padding-left: 5rem;
  margin-right: 1.5rem; */
  display: flex;
  justify-content: space-around !important;
  /* padding-right: 1rem; */
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

const ButtonURL = styled.a`
  font-weight: bold;
  border: 2px solid white;
  text-decoration: none;
  margin-bottom: 1rem;
  color: var(--textNormal);

  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  transition: transform 0.25s linear;
  text-align: center;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    color: white;
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
            <ButtonURL target="_blank" href={demoURL}>
              Demo
            </ButtonURL>
            <ButtonURL target="_blank" href={githubURL}>
              Code
            </ButtonURL>
          </Links>
        </TextBox>
      </StyledSlide>
    </>
  )
}
export default Slide
