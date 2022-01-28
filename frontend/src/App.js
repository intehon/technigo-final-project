import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Main from './components/Main'
import About from './components/About'
import Food from './components/Food'
import Theme from './components/Theme'
import Signup from './components/Signup'
import Admin from './components/Admin'
import Login from './components/Login'
import NotFound from './components/NotFound'

import user from './reducers/user'


const reducer = combineReducers({
  user: user.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/food' element={<Food />} />
          <Route path='/theme' element={<Theme />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App