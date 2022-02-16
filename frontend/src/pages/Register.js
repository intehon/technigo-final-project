import React, { useState, useEffect } from "react"
import { useSelector, useDispatch, batch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

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
  }, [navigate])

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
    <div>
        {loading && <Loader />}
        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            disabled={password.length < 8}
            onClick={onFormSubmit}
          >
            Submit
          </button>
        </form>
        <p><i>Already a member?</i></p>
        <Link to="/login">
            Sign in here!
        </Link>   
  </div>
  )
}

export default Signup