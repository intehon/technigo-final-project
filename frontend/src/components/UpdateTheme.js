import React, { useState } from 'react'

const Theme = () => {
  const [image, setImage] = useState({ preview: '', data: ''})
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:8080/files', {
      method: 'POST',
      body: formData
    })
    if (response) setStatus(response.statusText)
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
          <label htmlFor='image'>Image</label>
          <input type='file' name='file' onChange={handleFileChange}></input>
          <p>Supported files: .png, .jpg. .jpeg</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )  
}

export default Theme