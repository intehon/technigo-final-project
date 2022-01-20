import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
    return (
        <>
        <Header />
            Huvudsida
       <Footer />
       </>
    )
}

export default Main