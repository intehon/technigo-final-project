import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
    display: flex;
    justify-content: center;
`

const Layout = ({children}) => {
  return(
    <>
      <Backdrop>
       <main>{children}</main>
      </Backdrop>
    </>
  )
}

export default Layout