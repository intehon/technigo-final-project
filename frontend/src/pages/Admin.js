import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import user from '../reducers/user'

// import ProfileUpdate from '../components/ProfileUpdate'
// import ThemeUpdate from '../components/ThemeUpdate'
// import MenuUpdate from '../components/MenuUpdate'

import AdminMenu from '../components/AdminMenu'
import AccountMenu from '../components/AccountMenu'

const Admin = () => {
    // const [updateMenu, setUpdateMenu] = useState(false)
    // const [updateTheme, setUpdateTheme] = useState(false)

    const accessToken = useSelector((store) => store.user.accessToken)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const logout = () => {
    //     dispatch(user.actions.setInitialState())
    // }

    useEffect(() => {
        if (!accessToken) {
            navigate('/login')
        }
    }, [accessToken, navigate])

    return (
        <Wrapper>
            <AccountMenuContainer>
                   <AccountMenu />
                   </AccountMenuContainer>
            {/* <Wrapper>
                <ui>
                <ButtonContainer>
                <button onClick={logout}>Sign out!</button>
                <button onClick={() => setShowProfile(showProfile ? false : true)}>View profile</button>
                {showProfile && <ProfileUpdate />}
                <button onClick={() => setUpdateMenu(updateMenu ? false : true)}>Update Menu</button>
                {updateMenu && <MenuUpdate />}
                <button onClick={() => setUpdateTheme(updateTheme ? false : true)}>Update Theme</button>
                {updateTheme && <ThemeUpdate />}
                </ButtonContainer>
                </ui>
            </Wrapper> */}
            <AdminMenu />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 800px; */
`

const AccountMenuContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default Admin