import React from 'react'
import styled from 'styled-components'

import SetTable from '../assets/content/woodstockholm-245.jpg'
import {BiPhone} from 'react-icons/bi'

const Main = () => {
    return (
        <>
        <BackDrop>
            <Wrapper>
                <Container>
                    <TextContainer>
                        <Text>Woodstockholm Matbar</Text>
                        <Text>Mosebacke torg 9</Text>
                        <Text>Monday - Sunday 17 – 23</Text>
                        <PhoneSpan><PhoneIcon /><Link href="tel:+468369399" aria-label="+ 4 6. 8. 3 6 9. 3 9 9."> +46(0)8-369 399</Link></PhoneSpan>
                        <i>For chambre inquiries: <Link href="reservations@woodstockholm.com">reservations@woodstockholm.com</Link></i>
                    </TextContainer>
                    <Button 
                    href="https://app.bokabord.se/reservation/?hash=6f4e22917c2a3e8aefdd1332215dbb5c" rel="noopener noreferrer" target="_blank"
                    >Reservations</Button>
                    <Button 
                    href="https://gansub.com/s/9J7kb0MD/" rel="noopener noreferrer" target="_blank"
                    >Newsletter</Button>
                </Container>
            </Wrapper>
       </BackDrop>
    </>
    )
}

const Text = styled.p`
    text-transform: uppercase;
    font-size: 18px;
`

const BackDrop = styled.main`
    background-image: url(${SetTable});
    background-size: cover;
    background-position: center;
    width: 700px;
    height: 800px;
    border-style: double;
    border-color: pink;
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
    align-items: center;
    letter-spacing: 1px;
    background: white;
    opacity: 0.8;
    border-radius: 15px;
    font-size: 16px;
    border-style: double;
    border-color: pink;
`

const PhoneIcon = styled(BiPhone)`
    color: #000;    
    font-size: 20px;
`

const Button = styled.a`
    border-radius: 35px;
    background-color: #79B6C2;
    color: white;
    padding: 12px 27px;
    margin: 10px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px white;
    text-decoration: none;
    &:hover {
        background-color: #386C7B;
    }
`

const Link = styled.a`
    color: #c91c81;
    text-decoration: none;
    &:hover {
        color: #e40086;
    }
`

const PhoneSpan = styled.span`
    padding: 10px;
`

export default Main