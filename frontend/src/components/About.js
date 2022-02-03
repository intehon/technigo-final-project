import React from 'react'
import Chambre from './Chambre'
import styled from 'styled-components'

// import SetTable from '../assets/content/woodstockholm-205.jpg'


const About = () => {
    return (
        <>
                <Wrapper>
                {/* <img src={SetTable} alt="set table in restaurant" height="500"/> */}
                    <TextWrapper>
                        <TextContainer>
                            Woodstockholm Bistro is a place where flavours and meetings are created without regard to traditional boundaries. It is a place where we want everyone to feel welcome and be able to enjoy locally and sustainably produced food and drinks in a warm and beautiful environment. Chef Elias and his team work with a dynamic menu that changes regularly.
                    </TextContainer>
                    <TextContainer>
                        Tables, chairs, lamps and artistic installations are all part of the experience we want to offer.
                    </TextContainer>
                    <Chambre />
                    </TextWrapper>
                </Wrapper>
            
        </>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: 15px; */
    margin: 5px 200px;
`

const TextContainer = styled.div`
    display: flex;
    padding: 8px;
    letter-spacing: 1px;
`

export default About