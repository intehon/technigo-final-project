import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProfileUpdate from './ProfileUpdate'
import { Menu } from './Menu'
import UpdateTheme from './UpdateTheme'

import user from '../reducers/user'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const [showProfile, setShowProfile] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(user.actions.setAccessToken(''))
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
                <button onClick={() => setShowProfile(showProfile ? false : true)}>View profile</button>
                {showProfile && <ProfileUpdate />}
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