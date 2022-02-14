import React from 'react'
import styled from 'styled-components'

import MainImg from '../assets/content/woodstockholm-215.jpg'
// import Button from './Button.js'
// import { Button } from '@mui/material'
import {BiPhone} from 'react-icons/bi'

const Main = () => {
    return (
        <>
        <BackDrop>
            <Wrapper>
                <Container>
                        <TextContainer>
                            <p>Woodstockholm Matbar</p>
                            <p>Mosebacke torg 9</p>
                            <p>Monday - Sunday 17 – 23</p>
                            <PhoneSpan><PhoneIcon /><Link href="tel:+468369399" aria-label="+ 4 6. 8. 3 6 9. 3 9 9."> +46(0)8-369 399</Link></PhoneSpan>
                            <i>For chambre inquiries: <Link href="reservations@woodstockholm.com">reservations@woodstockholm.com</Link></i>
                        </TextContainer>
                        <Button 
                        href="https://app.bokabord.se/reservation/?hash=6f4e22917c2a3e8aefdd1332215dbb5c"
                        >Reservations</Button>
                        <Button 
                        href="https://gansub.com/s/9J7kb0MD/ "
                        >Newsletter</Button>
                    </Container>
                {/* <Container>
                <img src={MainImg} alt="set table" width="400" height="500"/>
                </Container> */}
        </Wrapper>
       </BackDrop>
    </>
    )
}

const BackDrop = styled.main`
    background-image: url(${MainImg});
    /* width: 700px;
    height: 800px; */
    background-size: cover;
    background-position: center;
    width: 800px;
    height: 900px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    /* justify-content: center; */
    align-items: center;
    letter-spacing: 1px;
    background: white;
    opacity: 0.8;
    border-radius: 15px;
    font-size: 16px;
`

const PhoneIcon = styled(BiPhone)`
    color: #000;    
    font-size: 20px;
`

const Button = styled.a`
    border-radius: 35px;
    background-color: red;
    color: white;
    padding: 12px 27px;
    margin: 10px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px white;
    text-decoration: none;
`

const Link = styled.a`
    color: orange;
    text-decoration: none;
    &:hover {
        color: red
    }
`

const PhoneSpan = styled.span`
    padding: 10px;
`

export default Main