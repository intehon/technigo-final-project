import React, { useState } from 'react'
import styled from 'styled-components'

import MenuImg from '../assets/content/temathai.jpg'

const Menu = () => {
    const [imgSize, setImgSize] = useState("300px")

    const toggleImgSize = () => {
      if (imgSize === "300px") {
        setImgSize("1100px")
      } else {
        setImgSize("300px")
      }
    }

  return (
    <ImageContainer onClick={toggleImgSize}>
     <Image style={{ width: imgSize }} src={MenuImg} alt="Menu" />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 0 auto;
`

const Image = styled.img`
    display: inline-block;
    justify-content: center;
    cursor: -moz-zoom-in; 
    cursor: -webkit-zoom-in; 
    cursor: zoom-in;
`

export default Menu 