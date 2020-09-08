import React from "react"
import { createGlobalStyle } from "styled-components"

import tlo from "../tlo.jpg"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    --bg: hsl(0, 0%, 98%);
    --boxShadowColor: hsl(0, 0%, 78%);
    --elements: hsl(0, 0%, 100%);
    --textTitle: hsl(200, 15%, 5%);
    --textNormal: hsl(200, 15%, 15%);
    --textInput: hsl(0, 0%, 52%);
    /* background-color: var(--bg); */
    background-color: #87AAC1;
    /* background-image: url(${tlo}); */
    background-size:contain;
    background-repeat: no-repeat;
    overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6,p,span {
    color: var(--textNormal);
  }
  * {
    box-sizing: border-box;
    :focus {
      outline: none;
    }
  }
`

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
