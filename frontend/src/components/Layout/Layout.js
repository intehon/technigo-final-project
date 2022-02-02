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
    /* padding: 20px; */

    /* display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column; */

    /* color: black; */

    /* display: flex; 
    justify-content: center;
    margin: 20px; */
`

const Main = styled.main`
  display: flex;
  margin: 50px 150px;
`

export default Layout