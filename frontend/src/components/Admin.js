import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Menu } from './Menu'
import UpdateTheme from './UpdateTheme'

import user from '../reducers/user'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const accessToken = useSelector((store) => store.user.accessToken)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(user.actions.setAccessToken(''))
        dispatch(user.actions.setEmail(''))
        dispatch(user.actions.setUserId(''))
        dispatch(user.actions.setUserName(''))
        dispatch(user.actions.setName(''))
    }

    useEffect(() => {
        if (!accessToken) {
            navigate('/login')
        }
    }, [accessToken, navigate])

    return (
        <>  
            <div>
                <button onClick={logout}>Sign out!</button>
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <UpdateTheme />
            </div>
        </>
    )
}

export default Admin