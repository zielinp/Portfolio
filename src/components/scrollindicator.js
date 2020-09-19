import React, { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"

import styled from "styled-components"

const DotContainer = styled.div`
  position: fixed;
  top: 3rem;
  width: 100%;

  height: 1rem;
  border: 1px solid black;
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
`

const ScrollIndicator = () => {
  const { x, y } = useWindowScroll()
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    // console.log(y)
    // let dot_pos = y>1800

    setScrolled((y / height) * 100)
  }, [y])

  return (
    <DotContainer>
      <StyledDot left={scrolled} />
    </DotContainer>
  )
}

export default ScrollIndicator
