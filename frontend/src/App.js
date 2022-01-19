import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  user: user.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}