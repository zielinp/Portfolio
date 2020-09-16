import React from "react"
import { createGlobalStyle } from "styled-components"

import tlo from "../tlo.jpg"
import cloud from "../clouds2.png"

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
    /* background-color: #87AAC1 !important;
    background-image: url(${cloud});  */
    /* background-color: yellow; */
    /* background-image: url(${tlo}); */

    background-image: linear-gradient(to right, #a3bded 0%, #6991c7 100%);
    
  }
  a{
    font-family: 'Nunito Sans', sans-serif !important; 
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
