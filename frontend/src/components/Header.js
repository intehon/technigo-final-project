import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/header-logo.jpg'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderBox>
            <NavLink to='/'>
                <HeaderLink href="">
                    <HeaderImg src={logo} alt="logo" />
                </HeaderLink>
            </NavLink>
        </HeaderBox>
    )
}   

const HeaderBox = styled.div`
    display: grid;
    place-items: center;
`

const HeaderLink = styled.a`
    display: flex;
    justify-content: center;
`

const HeaderImg = styled.img`
    /* height: 90%; */
    width: 60%;
`


export default Header