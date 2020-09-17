import React from "react"
import styled from "styled-components"

const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
`

const ImageBox = styled.div.attrs(props => ({
  image: props.image,
}))`
  background-color: white;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 36rem;
  height: 22rem;
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
  height: 28rem;
  margin-left: -5rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 1145px) {
    margin-left: 0;
  }
`

const Title = styled.p`
  color: #000000;
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
    padding-left: 0;
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
`

const Links = styled.div`
  margin-top: 1rem;
  margin-left: 5rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: space-between;
`

const DemoURL = styled.a`
  font-weight: bold;
  border: 1px solid black;
  text-decoration: none;
  margin-bottom: 1rem;
  color: black;

  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: transform 0.15s linear;
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
  color: black;

  padding: 0.5rem 1em;
  border-radius: 25px;
  transition: transform 0.15s linear;
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
        <ImageBox image={image}></ImageBox>
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
              See the demo
            </DemoURL>
            <GithubURL target="_blank" href={githubURL}>
              See the code
            </GithubURL>
          </Links>
        </TextBox>
      </StyledSlide>
    </>
  )
}
export default Slide
