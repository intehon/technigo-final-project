import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'
import user from '../reducers/user'
import Loader from '../components/Loader'


const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
  
    const accessToken = useSelector((store) => store.user.accessToken)
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    useEffect(() => {
      if (accessToken) {
        navigate('/admin')
      }
    }, [accessToken, navigate])

    const toggleShowPassword = () => setShowPassword(!showPassword)
  
    const onFormSubmit = (event) => {
      event.preventDefault()
      setLoading(true)
  
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
              alert ('Wrong username or password')
              setPassword('')
              dispatch(user.actions.setError(data.response))
              setLoading(false)
          }
        })
        setLoading(false)
        
      }
  
    return (
        <div>
          {loading && <Loader />}
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
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
              </button>
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
  
  const ClosedEyeIcon = styled(AiFillEyeInvisible)`
    color: #fff;
    font-size: 22px;
  `
  const OpenEyeIcon = styled(AiFillEye)`
    color: #fff;
    font-size: 22px;
  `