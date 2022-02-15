import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'

import user from '../reducers/user'
import ui from '../reducers/ui'
import { API_URL } from '../utils/constants'

const ProfileUpdate = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('61eaf441fd9d2d3916fe0d7b')
  const [profile, setProfile] = useState({ name: '', email: '', role: '', username: '' })

  const userId = useSelector((store) => store.user.userId)

  const dispatch = useDispatch()

  const getProfile = () => {
    fetch(API_URL(`users/${userId}`), {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
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
    dispatch(ui.actions.setLoading(true))

    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        role: role,
        email: email,
        username: username,
      })
    }

    fetch(API_URL(`users/${userId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
          if (data.success) {
              getProfile()
            batch(() => {
              dispatch(user.actions.setName(data.response.name))
              dispatch(user.actions.setRole(data.response.role))
              dispatch(user.actions.setEmail(data.response.email))
              dispatch(user.actions.setUserName(data.response.username))
              dispatch(user.actions.setError(null))
            })
        } else {
                dispatch(user.actions.setError(data.response))
        }
        })
        dispatch(ui.actions.setLoading(false))
  }

  return (
      <div>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>
                    Staff Name
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
                <input 
                type="radio" 
                value="61e95a685da324dd0f0ca0ce" 
                checked={role === '61e95a685da324dd0f0ca0ce'}
                onChange={(e) => setRole(e.target.value)}
                /> Admin
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
        <div>
        {profile && (
          <div>
            <p>Username: {profile.username}</p>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email} </p>
            <p>Role: {profile.role?.description}</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default ProfileUpdate