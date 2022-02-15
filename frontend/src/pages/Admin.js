import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import user from '../reducers/user'

import ProfileUpdate from '../components/ProfileUpdate'
import ThemeUpdate from '../components/ThemeUpdate'
import MenuUpdate from '../components/MenuUpdate'

const Admin = () => {
    const [showProfile, setShowProfile] = useState(false)
    const [updateMenu, setUpdateMenu] = useState(false)
    const [updateTheme, setUpdateTheme] = useState(false)

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
            <Wrapper>
                <ButtonContainer>
                <button onClick={() => setShowProfile(showProfile ? false : true)}>View profile</button>
                {showProfile && <ProfileUpdate />}
                <button onClick={() => setUpdateMenu(updateMenu ? false : true)}>Update Menu</button>
                {updateMenu && <MenuUpdate />}
                <button onClick={() => setUpdateTheme(updateTheme ? false : true)}>Update Theme</button>
                {updateTheme && <ThemeUpdate />}
                </ButtonContainer>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default Admin