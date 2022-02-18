import { Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'

import user from '../reducers/user'
import { API_URL } from '../utils/constants'
import Loader from './Loader'

const ProfileUpdate = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState('')
  const [message, setMessage] = useState(false)

  const userId = useSelector((store) => store.user.userId)
  const accessToken = useSelector((store) => store.user.accessToken)

  const dispatch = useDispatch()

  const getProfile = () => {
    fetch(API_URL(`users/${userId}`), {
      method: "GET",
      headers: {
        'Authorization': accessToken,
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
            setProfile({name: data.response.name, email: data.response.email, role: data.response.role, username: data.response.username})
        } else {
            setProfile(null)
        }
      })
  }
  useEffect(() => {
    getProfile()
    // eslint-disable-next-line
  }, [])

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const options = {
      method: 'PATCH',
      headers: {
        "Authorization": accessToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        username: username,
        role: profile.role
      })
    }

    fetch(API_URL(`users/${userId}`), options)
      .then((res) => res.json())
      .then((data) => {
          if (data.success) {
              getProfile()
            batch(() => {
              dispatch(user.actions.setName(data.response.name))
              dispatch(user.actions.setEmail(data.response.email))
              dispatch(user.actions.setUserName(data.response.username))
              dispatch(user.actions.setError(null))
            }) 
            setMessage(true)
        } else if (data.error) {
            dispatch(user.actions.setError(data.response))
        }
        })
        .finally(() => setTimeout(() => setLoading(false), 250))
  }

  return (
    <Container>
      <div>
        {loading && <Loader />}
          <form onSubmit={handleFormSubmit}>
              <div>
                  <label>
                      Name
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </label>
              </div>
              <div>
                  <label>
                      Email
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
              </div>
              <div>
                  <button type="submit">
                      Submit
                  </button>
              </div>
          </form>  
            {message &&
          <div>Your data is saved!</div>} 
        </div>
    </Container>
  )
}


export default ProfileUpdate