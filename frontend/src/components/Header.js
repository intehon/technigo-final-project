import React from 'react'
import logo from '../assets/header-logo.jpg'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderBox>
            <HeaderImg src={logo} alt="logo" />
        </HeaderBox>
    )
}   

const HeaderBox = styled.div`
    display: grid;
    place-items: center;
`

const HeaderImg = styled.img`
    /* height: 90%; */
    width: 60%;
`


export default Header