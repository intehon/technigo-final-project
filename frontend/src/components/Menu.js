import React, { useState, useEffect } from 'react'

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
    <div>{menu && <img src={menu} alt="menu" />}</div>
  )
}

export default Menu