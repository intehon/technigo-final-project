import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


import { API_URL } from '../utils/constants'

const Menu = () => {
    const [menu, setMenu] = useState('')
    const [imgSize, setImgSize] = useState("600px")

    const toggleImgSize = () => {
      if (imgSize === "600px") {
        setImgSize("1100px")
      } else {
        setImgSize("600px")
      }
    }
    const getMenu = () => {

        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }
          fetch(API_URL('menus'), options)
          .then((res) => res.json())
          .then((json) => setMenu(json.response[0]?.fileUrl))
    }
    useEffect(() => {
        getMenu()
    }, [])


  return (
    <ImageContainer onClick={toggleImgSize}>
     <Image style={{ width: imgSize }} src={menu} alt="Menu" />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
    display: flex;
    text-align: center;
`

const Image = styled.img`
    display: inline-block;
    justify-content: center;
    cursor: -moz-zoom-in; 
    cursor: -webkit-zoom-in; 
    cursor: zoom-in;
`

export default Menu 