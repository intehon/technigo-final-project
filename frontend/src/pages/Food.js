import React from 'react'
import styled from 'styled-components'

import Menu from '../components/Menu.js'

const Food = () => {

    return (
      
            <Wrapper>
                <ImageContainer>
                    {Menu && <Menu />}
                    <p><i>Example menu (click to enlarge)</i></p>
                </ImageContainer>
                <TextWrapper>
                    <TextContainer>
                        Woodstockholm works with a dynamic menu, using locally and sustainably produced raw materials. No matter what you choose from our menu, our goal that you will be guaranteed an experience where flavours and other impressions (yes, we eat with our eyes too! ) interact and reinforce each other. Our menus vary therefore with respect to season and availability.
                    </TextContainer>
                    <TextContainer>
                        We have a large selection of quality wines, often from smaller producers with the highest standards of sustainability and non-toxic production. Our alcohol-free product range is extensive and constantly evolving.
                    </TextContainer>
                    <TextContainer>
                        Please let us know if you have special dietary needs and we will do our best to meet these! Vegetarian food is not an option, it is a natural part of every Woodstockholm menu.
                    </TextContainer>
                    <TextContainer>
                        Opening hours monday – sunday 17-23!
                    </TextContainer> 
                </TextWrapper>
            </Wrapper>
     
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
    width: 700px;
    }
`

const ImageContainer = styled.div`
    text-align: center;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    max-width: 600px;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px;
    letter-spacing: 1px;
`

export default Food