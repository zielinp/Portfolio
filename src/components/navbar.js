import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  a {
    text-decoration: none;
    color: #e5e5e5;
  }
  a:hover {
    color: white;
    transform: scale(1.1);
  }
`

const Navbar = () => (
  <>
    <StyledNav>
      <Link to="/about">About me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  </>
)

export default Navbar
