import React from 'react'
import logo from '../assets/header-logo.jpg'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderBox>
                <HeaderLink href="./">
                    <HeaderImg src={logo} alt="logo" />
                </HeaderLink>
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
    width: 60%;
`


export default Header