import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import styled from 'styled-components'


const Footer = () => {
    return (
        <FooterContainer>
            <IconContainer>
                {/* <a href="mailto:reservations@woodstockholm.com">
                    <EmailIcon />
                </a> */}
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
`

const InstagramIcon = styled(BsInstagram)`
    color: #000;    
    font-size: 22px;
    &:hover {
        font-size: 25px;
    }
`

// const EmailIcon = styled(HiOutlineMail)`
//     color: #000;    
//     font-size: 25px;
//     &:hover {
//         font-size: 28px;
//     }
// `

export default Footer