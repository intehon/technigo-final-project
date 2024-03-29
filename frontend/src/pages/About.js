import React from 'react'
import styled from 'styled-components'

import SetTable from '../assets/content/about1.png'
import Plate from '../assets/content/about2.png'
import Interior from '../assets/content/about3.png'
import Window from '../assets/content/about4.png'

const About = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <TextContainer>
                    Woodstockholm Bistro is a place where flavours and meetings are created without regard to traditional boundaries. It is a place where we want everyone to feel welcome and be able to enjoy locally and sustainably produced food and drinks in a warm and beautiful environment. Chef Elias and his team work with a dynamic menu that changes regularly.
                </TextContainer>
                <TextContainer>
                    Tables, chairs, lamps and artistic installations are all part of the experience we want to offer.
                </TextContainer>    
            </TextWrapper>
            <ImageContainer>
                <Image src={SetTable} alt="Table full of food" />
                <Image src={Plate} alt="Chef Elias plating food" />
            </ImageContainer>
            <ImageContainer>
                <Image src={Interior} alt="Interior" />
                <Image src={Window} alt="Window decoration" />
            </ImageContainer>
        </Wrapper> 
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
    max-width: 600px;
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    display: flex;
    padding: 8px;
    letter-spacing: 1px;
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    text-align: center;
    max-width: 600px;
    padding-bottom: 10px;
    @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    }
`

const Image = styled.img`
  display: inline-block;
  max-width: 300px;
`

export default About