import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
  return (
    <LoadingOverlay>
        <LoadingSpinner />
    </LoadingOverlay>
  )
}

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const spinner = keyframes`
  0% {
    transform: rotate(0);
  }
  13% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(90deg);
  }
  38% {
    transform: rotate(135deg);
  }
  50% {
    transform: rotate(180deg);
  }
  63% {
    transform: rotate(225deg);
  }
  75% {
    transform: rotate(270deg);
  }
  88% {
    transform: rotate(315deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
    height: 50px;
    width: 50px;
    border: 5px solid #dcdcdc;
    border-radius: 50%;
    border-left: 5px solid #ffff;
    animation: spinner infinite 0.6s;
    display: inline-block;
    animation: ${spinner} infinite 0.5s;
`

export default Loader