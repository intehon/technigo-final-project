import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { combineReducers, createStore, compose, applyMiddleware } from '@reduxjs/toolkit'


import Main from './pages/Main'
import About from './pages/About'
import Food from './pages/Food'
import Theme from './pages/Theme'
import Signup from './pages/Signup'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Chambre from './pages/Chambre'
import NotFound from './pages/NotFound'

import './index.css'

import user from './reducers/user'
import Layout from './components/Layout/Layout'

const reducer = combineReducers({
  user: user.reducer
})

const persistedStateJSON = localStorage.getItem('myAppReduxState')
const persistedState = persistedStateJSON ? JSON.parse(persistedStateJSON) : {}

const composedEnhancers = 
(process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  reducer,
  persistedState,
  composedEnhancers(applyMiddleware(thunkMiddleware))
  )

store.subscribe(() => {
  localStorage.setItem('myAppReduxState', JSON.stringify(store.getState()))
})

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/food-and-wine' element={<Food />} />
            <Route path='/theme' element={<Theme />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/chambre' element={<Chambre />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App