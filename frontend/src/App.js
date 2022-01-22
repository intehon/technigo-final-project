import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Main from './components/Main'
import About from './components/About'
import FoodAndBeverage from './components/FoodAndBeverage'
import CurrentTheme from './components/CurrentTheme'
import Chambre from './components/Chambre'
import StaffPage from './components/StaffPage'
import Signup from './components/Signup'
import Login from './components/Login'
import NotFound from './components/NotFound'

import user from './reducers/user'
import ProfileUpdate from './components/ProfileUpdate'

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
          <Route path='/fnb' element={<FoodAndBeverage />} />
          <Route path='/theme' element={<CurrentTheme />} />
          <Route path='/chambre' element={<Chambre />} />
          <Route path='/update-profile' element={<ProfileUpdate />} />
          <Route path='/staff' element={<StaffPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App