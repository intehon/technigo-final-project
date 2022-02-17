import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'

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
        <Wrapper>
          {loading && <Loader />}
            <form onSubmit={onFormSubmit}>
              <InputWrapper>
              <TextField 
                color="secondary"
                required
                id="username"
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              </InputWrapper>
              <InputWrapper>
              <TextField
                color="secondary"
                required
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </InputWrapper>
              {/* <button type="button" onClick={toggleShowPassword}>
                {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
              </button> */}
              <InputWrapper>
              <Button 
                variant="contained" 
                color="secondary" 
                component="span"
                type="submit"
                disabled={password.length < 8}
                onClick={onFormSubmit}
              >
                Login
              </Button>
              </InputWrapper>
            </form>
            <InputWrapper>
          <p>
            <i>Not a member yet?</i>
          </p>
          <Link to='/register'>Sign up here!</Link>
          </InputWrapper>
        </Wrapper>
    )
  }
  
  export default Login
  
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const InputWrapper = styled.div`
  padding: 10px;
`

// const ClosedEyeIcon = styled(AiFillEyeInvisible)`
//   color: #fff;
//   font-size: 22px;
// `
// const OpenEyeIcon = styled(AiFillEye)`
//   color: #fff;
//   font-size: 22px;
// `