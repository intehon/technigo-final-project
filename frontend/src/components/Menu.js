import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'

const Menu = () => {

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


  return (
    <ImageContainer>{menu && <MenuImage src={menu} alt="menu" />}</ImageContainer>
  )
}

const ImageContainer = styled.div`
    text-align: center;
    /* max-width: 600px; */
`

const MenuImage = styled.img`
  display: inline-block;
  max-width: 600px;
`

export default Menu