import { Container } from '@mui/material'
import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'
import Loader from './Loader'

import Placeholder from './Placeholder'

const MenuUpdate = () => {
  const fileInput = useRef()
  const [menu, setMenu] = useState({ preview: '', data: ''})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(false)

  const accessToken = useSelector((store) => store.user.accessToken)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('file', fileInput.current.files[0])

    fetch(API_URL('menus'), {
      method: 'POST',
      headers: {
        'Authorization': accessToken
      },
      body: formData
    })
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        setLoading(false)
        setMessage(true)
        setMenu('')
      }
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files.length !== 0) {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setMenu(file)
  } else {
    setMenu('')
  }
}


  return (
    <Container sx={{width: '400px'}}>
      {loading && <Loader />}
        <h1>Update menu</h1>
        {!menu.preview && <Placeholder />}
        {menu.preview && <img src={menu.preview} height='400' width='400' alt='preview' />}
        <hr></hr>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='file'>File</label>
              <input type='file' name='file' ref={fileInput} onChange={handleFileChange} ></input>
              <TextContainer>
                <Text>Please convert .pdf to .jpeg, .jpg or .png before proceeding</Text>
              </TextContainer>
            </div>
            <button type='submit'>Submit</button>
          </form>
        {message && <div>Menu successfully uploaded!</div>}
      </Container>
  )  
}

const TextContainer = styled.div`
  max-width: 250px;
`

const Text = styled.p`
  font-size: 14px;
  font-style: italic;
`

export default MenuUpdate