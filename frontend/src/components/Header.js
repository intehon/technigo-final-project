import React from 'react'
import logo from '../assets/header-logo.jpg'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderBox>
            <img src={logo} alt="logo" />
            <hr></hr>
        </HeaderBox>
    )
}   

const HeaderBox = styled.div`
    justify-content: center;
`


export default Header