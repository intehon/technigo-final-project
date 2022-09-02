import React from 'react'
import styled from 'styled-components'

import ThemeImg from '../assets/content/tema_thai_img.jpg'

const Theme = () => {

  return (
    <Wrapper>
        <HeaderContainer>
          <Header>Tema Thailand</Header>
        </HeaderContainer>
        <ContentWrapper>
          <ImageContainer>
              <ThemeImage src={ThemeImg} alt="current theme" />
          </ImageContainer>
            <TextContainer>
                <p>Tur och retur till Bangkok på två timmar, kah?!</p>
                <p>Först var det pandemins alla restriktioner och nu är det passköerna. Men om vi inte kan ta oss dit så får Thailand komma till oss.</p>
                <p>Vi vill ha Thailand! Nu!</p>
                <p>Därför har vi tagit på oss det kanske svåraste uppdraget hittills, nämligen att tolka det rika och mångfacetterade thailändska köket.</p>
                <p>Chang-ölen ligger på kylning, fisksåserna står uppradade snyggt och prydligt,  mini-energidrickorna, ja dem har vi också. Chili i mängder och koriander likaså. Orkidéerna är på ingång och även thailändsk funk på vinyl.</p>
                <p>Woodstockholms version av kungariket Thailand öppnar idag tisdag den 3 maj ett stenkast från Mosebacke monarki.</p>
            </TextContainer>
      </ContentWrapper>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
    width: 700px;
    }
    @media (min-width: 992px) {
      max-width: 700px;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    letter-spacing: 1px;
`

const ImageContainer = styled.div`
  text-align: center;

`

const ThemeImage = styled.img`
  display: inline-block;
  max-width: 300px;
  border-radius: 1%;
    @media (min-width: 768px) {
    max-width: 600px;
    }
    @media (min-width: 992px) {
      max-width: 600px;
    }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Header = styled.h1`
  font-size: 22px;
  text-transform: uppercase;
  font-style: italic;
  padding-bottom: 20px;
`

export default Theme