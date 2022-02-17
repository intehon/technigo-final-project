import { Container, TextField, Button } from '@mui/material'
import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import SaveIcon from '@mui/icons-material/Save'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'
import Loader from './Loader'
import Placeholder from './Placeholder'

const ThemeUpdate = () => {
  const fileInput = useRef()
  const nameInput = useRef()
  const descriptionInput = useRef()
  const [image, setImage] = useState({ preview: '', data: ''})
  const [name, setName] = useState('')  
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(false)

  const accessToken = useSelector((store) => store.user.accessToken)

  // const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)
    formData.append('description', description)

    fetch(API_URL('themes'), {
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
        setImage('')
        nameInput.current.value = ''
        descriptionInput.current.value = ''
      }
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files.length !== 0) {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setImage(img)
  } else {
    setImage('')
  }
}


  return (
    <Container>
      {loading && <Loader />}
      <Wrapper>
      {!image.preview && <Placeholder />}
          {image.preview && <img src={image.preview} height='400' width='400' alt='preview'
          />}
          <FormWrapper>
            <h1>Update theme</h1>
              <form onSubmit={handleSubmit}>
                    <TextField type="text" value={name} ref={nameInput} label="New theme name" name="name" color="secondary" onChange={(e) => setName(e.target.value)}/>
                   <FormChild>
                    <TextField value={description} ref={descriptionInput} label="New theme description..." name='description' multiline rows={3} color="secondary" onChange={(e) => setDescription(e.target.value)} />
                  </FormChild>
                  {/* <label htmlFor='image'>Image</label>
                  <input type='file' name='file' ref={fileInput} label="New theme description" onChange={handleFileChange}></input> */}
                  <label htmlFor="contained-button-file"> </label>
                    <Input accept="image/*" id="contained-button-file" multiple type="file" ref={fileInput} onChange={handleFileChange} />
                    <Button variant="contained" color="secondary" component="span" endIcon={<FileUploadIcon />}>
                      Upload
                    </Button>
                  <Text>Supported files: .png, .jpg. .jpeg</Text>
                  <Button type="submit" variant="contained" color="secondary" endIcon={<SaveIcon />}>Save</Button>
                {/* <button type='submit'>Submit</button> */}
            </form>
          </FormWrapper>
        </Wrapper>
        {message && <div>Theme successfully uploaded!</div>}
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

const FormChild = styled.div`
  padding: 12px 0;
`

const Text = styled.p`
  font-size: 14px;
  font-style: italic;
`

const Input = styled('input')({
  display: 'none',
})

export default ThemeUpdate