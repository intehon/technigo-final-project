import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'
import { Navbar } from '../Navbar'

const Layout = ({children}) => {
  return(
    <Backdrop>
      <Header />
      <Navbar />
       <Main>{children}</Main>
       <Footer />
    </Backdrop>
  )
}

const Backdrop = styled.div`
    display: grid;
    place-items: center;
    margin: 10px;
`

const Main = styled.main`
  display: flex;
  width: 350px;
  @media (min-width: 768px) {
    width: 600px;
    margin: 30px 50px;
  }
  @media (min-width: 992px) {
    width: 700px;
    margin: 50px 150px;
    justify-content: center;
  }
`

export default Layout