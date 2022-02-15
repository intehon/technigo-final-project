import React, { useState, useRef } from 'react'
import { API_URL } from '../utils/constants'

const MenuUpdate = () => {
  const fileInput = useRef()
  const [menu, setMenu] = useState({ preview: '', data: ''})
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', fileInput.current.files[0])
    formData.append('name', name)

    fetch(API_URL('menus'), {
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
    })
  }

  const handleFileChange = (e) => {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setMenu(file)
  }


  return (
    <div className='App'>
    <h1>Update menu</h1>
    {menu.preview && <embed src={menu.preview} height='400' width='400' alt='preview' />}
    <hr></hr>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='file'>File</label>
        <input type='file' name='file' ref={fileInput} onChange={handleFileChange} ></input>
        <p>Only .pdf-files supported</p>
      </div>
      <button type='submit'>Submit</button>
    </form>
    {status && <h4>{status}</h4>}
  </div>
  )  
}

export default MenuUpdate