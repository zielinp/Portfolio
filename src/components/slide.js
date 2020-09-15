import React from "react"
import styled from "styled-components"
import rgb_game from "../rgb_game.jpg"
import tlo from "../tlo.jpg"

const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;
`

const ImageBox = styled.div`
  background-color: white;
  background-image: url(${tlo});
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
  background-color: #c5c5c5;
  padding: 2rem;
  width: 30rem;
  height: 28rem;
  margin-left: -5rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  div {
    margin-top: 2rem;
    display: flex;
    padding-left: 5rem;
    padding-right: 1rem;
    justify-content: space-between;

    div {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media only screen and (max-width: 1145px) {
      padding-left: 0;
    }
  }

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
  font-size: 1.25rem;

  @media only screen and (max-width: 1145px) {
    padding-left: 0;
  }
`

const Technologies = styled.div`
  /* text-align: center; */
  p {
    color: black;
    margin: 0;
    margin-bottom: 1rem;
  }

  p:first-of-type {
    font-weight: bold;
  }
`

const DemoURL = styled.a`
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 1rem;
  color: black;
`

const GithubURL = styled.a`
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 1rem;
  color: black;
`

function Slide({
  titile,
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
        <ImageBox></ImageBox>
        <TextBox>
          <Title>
            <span>
              RGB Guess Game <span></span>
            </span>
          </Title>

          <Desc>
            First game project created as part of learning the basics of
            JavaScript based on functional programming.
          </Desc>

          <div>
            <Technologies>
              <p>Technologies used:</p>
              <p>CSS, HTML, JavaScript</p>
            </Technologies>
            <div>
              <DemoURL
                target="_blank"
                href="https://zielinp.github.io/RGB-Guess-Game/"
              >
                See the demo
              </DemoURL>
              <GithubURL
                target="_blank"
                href="https://github.com/zielinp/RGB-Guess-Game"
              >
                See the code
              </GithubURL>
            </div>
          </div>
        </TextBox>
      </StyledSlide>
    </>
  )
}
export default Slide
