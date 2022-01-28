import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { API_URL } from '../utils/constants'
import user from '../reducers/user'



const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
  
    const accessToken = useSelector((store) => store.user.accessToken)
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    useEffect(() => {
      if (accessToken) {
        navigate('/admin')
      }
    }, [accessToken, navigate])
  
    const onFormSubmit = (event) => {
      event.preventDefault()
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      };
  
      fetch(API_URL('login'), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            batch(() => {
              dispatch(user.actions.setUserId(data.response.userId))
              dispatch(user.actions.setUserName(data.response.username))
              dispatch(user.actions.setAccessToken(data.response.accessToken))
              dispatch(user.actions.setError(null))
            })
          } else {
            batch(() => {
              dispatch(user.actions.setUserId(null))
              dispatch(user.actions.setUserName(null))
              dispatch(user.actions.setAccessToken(null))
              dispatch(user.actions.setError(data.response))
            })
          }
        })
    }
  
    return (
        <div>
          <form onSubmit={onFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={password.length < 5}
              onClick={onFormSubmit}
            >
              Login
            </button>
          </form>
          <p>
            <i>Not a member yet?</i>
          </p>
          <Link to='/signup'>Sign up here!</Link>
        </div>
    )
  }
  
  export default Login
  