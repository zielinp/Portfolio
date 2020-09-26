import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ScrollIndicator from "../components/scrollindicator"

const StyledNav = styled.nav`
  position: fixed;
  top: 0%;
  width: 100%;
  height: 4rem;
  /* background-color: #87aac1; */
  /* background-color: red; */
  z-index: 2;
  /* font-family: "Roboto"; */
  font-size: 1.25rem;
  font-style: normal;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
  a {
    text-decoration: none !important;
    color: #e5e5e5;
    transition: transform 0.15s linear;
  }
  a:hover {
    color: white;
    transform: scale(1.1);
    filter: drop-shadow(0px 8px 8px rgba(255, 255, 255, 0.25));
  }
`

const Navbar = () => (
  <>
    <StyledNav>
      <Link to="/#about">About me</Link>
      <Link to="/#projects">Projects</Link>
      <Link to="/#skills">Skills</Link>
      <Link to="/#contact">Contact</Link>
    </StyledNav>
    {/* <ScrollIndicator></ScrollIndicator> */}
  </>
)

export default Navbar
