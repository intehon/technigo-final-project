import React, { useState, useEffect } from "react"
import { useSelector, useDispatch, batch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'

import { API_URL } from "../utils/constants"
import user from "../reducers/user"
import Loader from '../components/Loader'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const accessToken = useSelector((store) => store.user.accessToken)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
      navigate('/login')
    }
  }, [navigate, accessToken])

  const onFormSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    }

    fetch(API_URL('register'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId))
            dispatch(user.actions.setUserName(data.response.username))
            dispatch(user.actions.setEmail(data.response.email))
            dispatch(user.actions.setAccessToken(data.response.accessToken))
            dispatch(user.actions.setError(null))
          })
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null))
            dispatch(user.actions.setUserName(null))
            dispatch(user.actions.setEmail(null))
            dispatch(user.actions.setAccessToken(null))
            dispatch(user.actions.setError(data.response))
            alert("Something went wrong!")
          })  
        }
      })
      .finally(() => setTimeout(() => setLoading(false), 1250))

      setUsername('')
      setEmail('')
      setPassword('')
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <TextField
              color="secondary"
              required
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <InputWrapper>
            <Button 
            variant="contained" 
            color="secondary" 
            component="span"
            type="submit"
            disabled={password.length < 8}
            onClick={onFormSubmit}
            >
            Submit
            </Button>
          </InputWrapper>
        </form>
        <InputWrapper>
          <p><i>Already a member?</i></p>
          <Link to="/login">
              Sign in here!
          </Link>
        </InputWrapper>   
  </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const InputWrapper = styled.div`
  padding: 10px;
`
