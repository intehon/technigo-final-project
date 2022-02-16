import React, { useState, useRef } from 'react'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'
import Loader from './Loader'

const ThemeUpdate = () => {
  const fileInput = useRef()
  const nameInput = useRef()
  const descriptionInput = useRef()
  const [image, setImage] = useState({ preview: '', data: ''})
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(false)

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
  } 
}


  return (
    <Container className='App'>
      {loading && <Loader />}
        <h1>Update theme</h1>
          {image.preview && <img src={image.preview} height='400' width='400' alt='preview'
          />}
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <label htmlFor='name'>Name</label>
                <input type="text" value={name} ref={nameInput} name="name" onChange={(e) => setName(e.target.value)}/>
              <label htmlFor='description'>Description</label>
                <textarea value={description} ref={descriptionInput} name='description' rows='5' cols='40' onChange={(e) => setDescription(e.target.value)}>
                  Description of new theme...^_^
                </textarea>
              <label htmlFor='image'>Image</label>
              <input type='file' name='file' ref={fileInput} onChange={handleFileChange}></input>
              <p>Supported files: .png, .jpg. .jpeg</p>
            </FormContainer>
            <button type='submit'>Submit</button>
        </form>
        {message && <div>Theme successfully uploaded!</div>}
    </Container>
  )  
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default ThemeUpdate