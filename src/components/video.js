import React from "react"
import styled from "styled-components"

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  iframe {
    margin: 0 1rem;
    border-radius: 10px;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
    width: 600px;
    height: 337px;
  }
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <>
    <StyledVideo>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </StyledVideo>
  </>
)
export default Video
