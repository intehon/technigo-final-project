import React, { useState } from 'react'

export const Menu = () => {
  const [file, setFile] = useState({ preview: '', data: ''})
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', file.data)
    const response = await fetch('http://localhost:8080/files', {
      method: 'POST',
      body: formData
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setFile(file)
  }

  return (
    <div className='App'>
      <h1>Update menu</h1>
      {file.preview && <embed src={file.preview} height='400' width='400' alt='preview' />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='file'>File</label>
          <input type='file' name='file' onChange={handleFileChange}></input>
          <p>Only .pdf-files supported</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )  
}