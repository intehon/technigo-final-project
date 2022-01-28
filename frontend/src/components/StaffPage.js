import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import ProfileUpdate from './ProfileUpdate'
import {user} from '../reducers/user'



const StaffPage = () => {
    const [showProfile, setShowProfile] = useState(false)
    const [menu, setMenu] = useState('')


    return (
        <>
            <div>
                <button onClick={() => setShowProfile(showProfile ? false : true)}>View profile</button>
                {showProfile && <ProfileUpdate />}
            </div>
            <div>
                <p>Upload menu!</p>
            </div>
            <div>
                <p>Upload images to gallery!</p>
            </div>
        </>
    )
}

export default StaffPage