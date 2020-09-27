import React, { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"

import styled from "styled-components"

const DotContainer = styled.div`
  position: fixed;
  top: 3rem;
  width: 100%;

  height: 1rem;
  z-index: 10;
`

const StyledDot = styled.div.attrs(props => ({
  left: props.left,
}))`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  left: ${props => props.left}%;
  transition: all 0.25s linear;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
`

const ScrollIndicator = () => {
  const { x, y } = useWindowScroll()
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    let dotPosition

    if (y < (225 / 1025) * height) {
      dotPosition = -1
    } else if ((425 / 1025) * height > y) {
      //about
      dotPosition = 12.5
    } else if ((525 / 1025) * height > y) {
      //about - projects
      dotPosition = 12.5 + (y - (425 / 1025) * height) / (38.5 - 12.5)
    } else if ((625 / 1025) * height > y) {
      //projects
      dotPosition = 38.5
    } else if ((725 / 1025) * height > y) {
      //projects - skills
      dotPosition = 38.5 + (y - (625 / 1025) * height) / (63 - 38.5)
    } else if ((825 / 1025) * height > y) {
      //skills
      dotPosition = 63
    } else if ((925 / 1025) * height > y) {
      //skills - contact
      dotPosition = 63 + (y - (825 / 1025) * height) / (87 - 63)
    } else {
      //contact
      dotPosition = 87
    }

    setScrolled(dotPosition)
  }, [y])

  return (
    <DotContainer>
      <StyledDot left={scrolled} />
    </DotContainer>
  )
}

export default ScrollIndicator
