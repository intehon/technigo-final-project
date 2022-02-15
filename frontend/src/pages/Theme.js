import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'

const Theme = () => {

  const [theme, setTheme] = useState('')

  const getTheme = () => {

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }

    fetch(API_URL('themes'), options)
    .then((res) => res.json())
    .then((json) => setTheme(json))
  }

  console.log(theme)

  useEffect(() => {
    getTheme()
  }, [])


  return (
    <Wrapper>
        <HeaderContainer>
        {theme && <h2>{theme.response[0].name}</h2>}
      </HeaderContainer>
      <ImageContainer>
          {theme && <ThemeImage src={theme.response[0].imageUrl} alt="current theme" />}
      </ImageContainer>
      <TextWrapper>
        <TextContainer>
            {theme && <p>{theme.response[0].description}</p>}
        </TextContainer>
      </TextWrapper>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
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
  text-align: center;
`

const ThemeImage = styled.img`
  display: inline-block;
  max-width: 600px;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default Theme