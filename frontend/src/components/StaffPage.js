import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import ProfileUpdate from './ProfileUpdate'
import {user} from '../reducers/user'



const StaffPage = () => {
    const [showProfile, setShowProfile] = useState(false)


    return (
        <>
            <div>
                <button onClick={() => setShowProfile(showProfile ? false : true)}>View profile</button>
                {showProfile && <ProfileUpdate />}
            </div>
            <div>
                <p>Ladda upp meny!</p>
            </div>
            <div>
                <p>Ladda upp nya bider i galleriet!</p>
            </div>
        </>
    )
}

export default StaffPage