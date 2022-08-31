import React from 'react'
import styled from 'styled-components'

const FAQ = () => {
  return (
    <Wrapper>
        <TextContainer>~coming soon~</TextContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    @media (min-width: 768px) {
    max-width: 600px;
    }
`

const TextContainer = styled.div`
    display: flex;
    padding: 8px;
    letter-spacing: 1px;
`

export default FAQ