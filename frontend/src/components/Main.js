import React from 'react'
import styled from 'styled-components'

import MainImg from '../assets/content/woodstockholm-245.jpg'

const Main = () => {
    return (
        <>
        <button data-hash="6f4e22917c2a3e8aefdd1332215dbb5c" class="waiteraid-widget">Boka bord</button>
        <Wrapper>
            <img src={MainImg} alt="set table" width="400" height="500"/>
       </Wrapper>
       </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export default Main