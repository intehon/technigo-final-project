import React, { useEffect, useState } from 'react'

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

    fetch(API_URL('files'), options)
    .then((res) => res.json())
    .then((json) => setTheme(json))
  }

  console.log(theme)

  useEffect(() => {
    getTheme()
  }, [])


  return (
    <>
      <div>
          {theme && <img src={theme.response[0].imageUrl} alt="current theme" />}
      </div>
      <div>
        {theme && <h2>{theme.response[0].name}</h2>}
      </div>
      <div>
          {theme && <p>{theme.response[0].description}</p>}
      </div>
    </>
  ) 
}

export default Theme