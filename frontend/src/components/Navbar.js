import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  return (
  <Container>
         <NavLink to='/' style={({ isActive }) => ({
            color: isActive ? '#FF8C00' : '#808080',
            textDecoration: isActive ? 'underline' : 'none'
        })}>Home</NavLink><Text> | </Text>
        <NavLink to='/food-and-wine' style={({ isActive }) => ({
            color: isActive ? '#FF8C00' : '#808080',
            textDecoration: isActive ? 'underline' : 'none'
        })}>Food and Wine</NavLink><Text> | </Text>
        <NavLink to='/theme' style={({ isActive }) => ({
            color: isActive ? '#FF8C00' : '#808080',
            textDecoration: isActive ? 'underline' : 'none'
        })}>Current Theme</NavLink><Text> | </Text>
        <NavLink to='/about' style={({ isActive }) => ({
            color: isActive ? '#FF8C00' : '#808080',
            textDecoration: isActive ? 'underline' : 'none'
        })}>About Us</NavLink><Text> | </Text>
        <NavLink to='/faq' style={({ isActive }) => ({
            color: isActive ? '#FF8C00' : '#808080',
            textDecoration: isActive ? 'underline' : 'none',
        })}>FAQ</NavLink>
  </Container>
  )
}

const Container = styled.nav`
    /* display: flex; */
    display: inline;
    justify-content: flex-end;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 25px 25px 5px;
`

const Text = styled.p`
        display: inline;
        /* justify-content: flex-end; */
`