import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { API_URL } from '../utils/constants'

const ShowProfile = () => {
    const [profile, setProfile] = useState({ name: '', email: '', role: '', username: '' })

    const userId = useSelector((store) => store.user.userId)
    const accessToken = useSelector((store) => store.user.accessToken)

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

  return (
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
  )
}

export default ShowProfile
