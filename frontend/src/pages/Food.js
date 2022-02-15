import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'

const Food = () => {
    const [menu, setMenu] = useState('')

    const getMenu = () => {

        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }
      
          fetch(API_URL('menus'), options)
          .then((res) => res.json())
          .then((json) => setMenu(json.response[0].fileUrl))
        }

    useEffect(() => {
        getMenu()
    }, [])

    const enlargeImg = () => {
        img.style.transform = 'scale(1.5)'
        img.style.transition = 'transform 0.25s ease'
    }

    return (
        <Wrapper>
            <TextWrapper>
                    {menu && <img src={menu} alt='menu' onClick={enlargeImg}/>}
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
    flex-direction: row;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 200px;
`

const TextContainer = styled.div`
    display: flex;
    padding: 8px;
    letter-spacing: 1px;
`

export default Food