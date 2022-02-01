import React from 'react'
import Footer from './Footer'
import Header from './Header'

import MainImg from '../assets/content/woodstockholm-245.jpg'

const Main = () => {
    return (
        <>
        <Header />
            <img src={MainImg} alt="set table" width="400" height="500"/>
       <Footer />
       </>
    )
}

export default Main