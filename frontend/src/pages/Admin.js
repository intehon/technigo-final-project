import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import user from '../reducers/user'

import ProfileUpdate from '../components/ProfileUpdate'
import ThemeUpdate from '../components/ThemeUpdate'
import MenuUpdate from '../components/MenuUpdate'

const Admin = () => {
    const accessToken = useSelector((store) => store.user.accessToken)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(user.actions.setInitialState())
    }

    useEffect(() => {
        if (!accessToken) {
            navigate('/login')
        }
    }, [accessToken, navigate])

    return (
        <>  
            <Container>
                <div>
                    <button onClick={logout}>Sign out!</button>
                </div>
                <div>
                    <ProfileUpdate />
                </div>
                <div>
                    <MenuUpdate />
                </div>
                <div>
                    <ThemeUpdate />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default Admin