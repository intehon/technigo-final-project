import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import user from '../reducers/user'
import { API_URL } from '../utils/constants'

const ProfileUpdate = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')
  const [role, setRole] = useState('Staff')

  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)

  const dispatch = useDispatch()
  const navigate = useNavigate()

//   useEffect(() => {
//       if (accessToken) {
//           navigate('/staff')
//       }
//   }, [accessToken, navigate])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)
    formData.append('role', role)

    // const options = {
    //     method: 'POST',
    //     body: formData
    // }

    fetch(API_URL(`users/${userId}/update`), {
        method: 'PATCH',
        body: formData
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          if (data.success) {
            batch(() => {
                dispatch(user.actions.setUserId(data.response.userId))
                dispatch(user.actions.setName(data.response.name))
                dispatch(user.actions.setRole(data.response.role))
                dispatch(user.actions.fileInput(data.ref.fileInput.current.files[0]))
                dispatch(user.actions.setError(null))
            })
        } else {
            batch(() => {
                dispatch(user.actions.setUserId(null))
                dispatch(user.actions.setName(null))
                dispatch(user.actions.setRole(null))
                dispatch(user.actions.fileInput(null))
                dispatch(user.actions.setError(data.response))
            })
        }
        })
  }

  return (
      <div>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>
                    Profile Image
                    <input type="file" ref={fileInput} />
                </label>
            </div>

            <div>
                <label>
                    Staff Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>

            <div>
                <input 
                type="radio" 
                value="61e95a385da324dd0f0ca0cc" 
                checked={role === '61e95a385da324dd0f0ca0cc'}
                onChange={(e) => setRole(e.target.value)}
                /> Owner
                <input 
                type="radio" 
                value="61e95a685da324dd0f0ca0ce" 
                checked={role === '61e95a685da324dd0f0ca0ce'}
                onChange={(e) => setRole(e.target.value)}
                /> Admin
                <input 
                type="radio" 
                value="61e95acf5da324dd0f0ca0d0" 
                checked={role === '61e95acf5da324dd0f0ca0d0'}
                onChange={(e) => setRole(e.target.value)}
                /> Manager
                <input 
                type="radio" 
                value="61eaf441fd9d2d3916fe0d7b" 
                checked={role === '61eaf441fd9d2d3916fe0d7b'}
                onChange={(e) => setRole(e.target.value)}
                /> Staff
            </div>

            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default ProfileUpdate