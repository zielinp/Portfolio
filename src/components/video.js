import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
    width: 660px;
    height: 370px;
  }
`

function Video({ videoSrcURL, videoTitle, ...props }) {
  const video = React.createRef()
  const styled_video = React.createRef()

  gsap.defaults({ ease: "none" })
  const tl2 = gsap.timeline()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    tl2.fromTo(
      video.current,
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, ease: "easeInOut" }
    )
    tl2.to(video.current, { y: "-=200", opacity: 0 })

    ScrollTrigger.create({
      animation: tl2,
      trigger: styled_video.current,
      start: "top 155%", //top 25%
      end: "145%", //55%
      // markers: true,
      scrub: 0.5,
    })
  }, [styled_video, video])

  return (
    <StyledVideo id="about" ref={styled_video}>
      <iframe
        ref={video}
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </StyledVideo>
  )
}

export default Video
