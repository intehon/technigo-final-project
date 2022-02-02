import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import styled from 'styled-components'


const Footer = () => {
    return (
        <FooterContainer>
            <a href="https://www.instagram.com/woodstockholm/">
                <InstagramIcon />
            </a>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
`

const InstagramIcon = styled(BsInstagram)`
    color: #000;    
    font-size: 22px;
    &:hover {
        font-size: 25px;
    }
`

export default Footer