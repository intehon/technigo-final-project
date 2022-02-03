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
                            <p><PhoneIcon /> +46(0)8-369 399</p>
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
    width: 700px;
    height: 800px;
    background-size: cover;
    background-position: center;
    /* width: 2000px;
    height: 2000px; */
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
`

const SmallTextContainer = styled.div`
    display: flex;
    /* width: 250px; */
    /* align-items: center; */
    font-style: italic;
    letter-spacing: .5px;    
`

const PhoneIcon = styled(BiPhone)`
    color: #000;    
    font-size: 20px;
`

const Button = styled.a`
    border-radius: 35px;
    background-color: #ffb347;
    color: white;
    padding: 12px 27px;
    margin: 10px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px white;
    text-decoration: none;
`

export default Main