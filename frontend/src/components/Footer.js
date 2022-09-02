import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import styled from 'styled-components'


const Footer = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <a href="https://www.instagram.com/woodstockholm/">
                    <InstagramIcon />
                </a>
            </IconContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
`

const IconContainer = styled.div`
    display: flex;
    padding: 10px;
`

const InstagramIcon = styled(BsInstagram)`
    color: #000;    
    font-size: 22px;
    &:hover {
        font-size: 25px;
    }
`

export default Footer