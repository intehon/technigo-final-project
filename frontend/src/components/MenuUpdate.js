import React, { useState, useRef } from 'react'
import { Container, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import SaveIcon from '@mui/icons-material/Save'
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
    <Container>
      {loading && <Loader />}
        <Wrapper>
          {!menu.preview && <Placeholder />}
          {menu.preview && <img src={menu.preview} height='400' width='400' alt='preview' />}
          <FormWrapper>
            <h1>Update menu</h1>
            <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" ref={fileInput} onChange={handleFileChange} />
              <Button variant="contained" color="secondary" component="span" endIcon={<FileUploadIcon />}>
                Choose image
              </Button>
              </label>
              {/* <label htmlFor='file'>Choose image</label>
              <input type='file' name='file' ref={fileInput} onChange={handleFileChange} ></input> */}
              <TextContainer>
                <Text>Please convert .pdf to .jpeg, .jpg or .png before proceeding</Text>
              </TextContainer>
            </div>
              <Button type="submit" variant="contained" color="secondary" endIcon={<SaveIcon />}>Save</Button>
            </form>
          </FormWrapper>
        </Wrapper>
      {message && <div>Menu successfully uploaded!</div>}
    </Container>
  )  
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const TextContainer = styled.div`
  max-width: 250px;
`

const Text = styled.p`
  font-size: 14px;
  font-style: italic;
`

const Input = styled('input')({
  display: 'none',
})

export default MenuUpdate