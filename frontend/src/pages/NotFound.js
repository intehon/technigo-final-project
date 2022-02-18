import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styled from 'styled-components'

const NotFound = () => {

  const navigate = useNavigate
  
  const onButtonClick = () => {
    navigate('/')
  }


  return (
    <div>
      <p>Can't find page.</p>
      <Button 
        variant="contained" 
        color="secondary" 
        component="span"
        type="submit"
        onClick={onButtonClick}
      ><Link href='./'>Go back</Link></Button>
    </div>
  )
}

export default NotFound

const Link = styled.a`
    color: inherit;
    text-decoration: none;
`