import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
    const style = {
        active: { color: "#808080", textDecoration: "none" },
        notActive: { color: "#E40086", textDecoration: "underline" },
      }
  return (
  <Container>
        <NavLink to="/" style={({ isActive }) => (isActive ? style.notActive : style.active)}>Home</NavLink><Text> | </Text>
        <NavLink to="/food-and-wine" style={({ isActive }) => (isActive ? style.notActive : style.active)}>Food and Wine</NavLink><Text> | </Text>
        <NavLink to="/chambre" style={({ isActive }) => (isActive ? style.notActive : style.active)}>Chambre Separee</NavLink><Text> | </Text>
        <NavLink to="/theme" style={({ isActive }) => (isActive ? style.notActive : style.active)}>Current Theme</NavLink><Text> | </Text>
        <NavLink to="/about" style={({ isActive }) => (isActive ? style.notActive : style.active)}>About Us</NavLink><Text> | </Text>
        <NavLink to="/faq" style={({ isActive }) => (isActive ? style.notActive : style.active)}>FAQ</NavLink>
  </Container>
  )
}

const Container = styled.nav`
    display: inline;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5px;
    padding: 15px 25px 5px;
    width: 300px;
    @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 992px) {
    width: 700px;
    padding: 25px 25px 5px;
    justify-content: center;
  }
`

const Text = styled.p`
        display: inline;
`
