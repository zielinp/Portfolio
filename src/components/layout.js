import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    --bg: hsl(0, 0%, 98%);
    --boxShadowColor: hsl(0, 0%, 78%);
    --elements: hsl(0, 0%, 100%);
    --textTitle: hsl(200, 15%, 5%);
    --textNormal: white;
    --textInput: hsl(0, 0%, 52%);
  
    background-image: linear-gradient(to right, #a3bded 0%, #6991c7 100%);
    
  }
  a, p, span{
    font-family: 'Roboto', sans-serif !important; 
   
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

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
