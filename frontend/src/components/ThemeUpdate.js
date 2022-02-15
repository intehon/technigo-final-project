import React, { useState, useRef } from 'react'
import { API_URL } from '../utils/constants'

const ThemeUpdate = () => {
  const fileInput = useRef()
  const [image, setImage] = useState({ preview: '', data: ''})
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)
    formData.append('description', description)

    fetch(API_URL('files'), {
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
    })

  //   if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setImage(img)
  }


  return (
    <div className='App'>
      <h1>Update theme</h1>
      {image.preview && <img src={image.preview} height='400' width='400' alt='preview'
      />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          <label htmlFor='description'>Description</label>
            <textarea value={description} name='description' rows='5' cols='40' onChange={(e) => setDescription(e.target.value)}>
              Description of new theme...^_^
            </textarea>
          <label htmlFor='image'>Image</label>
          <input type='file' name='file' ref={fileInput} onChange={handleFileChange}></input>
          <p>Supported files: .png, .jpg. .jpeg</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )  
}

export default ThemeUpdate