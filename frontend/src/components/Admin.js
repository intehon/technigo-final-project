import React, { useState } from 'react'

import ProfileUpdate from './ProfileUpdate'
import { Menu } from './Menu'


const Admin = () => {
    const [showProfile, setShowProfile] = useState(false)

    return (
        <>
            <div>
                <button onClick={() => setShowProfile(showProfile ? false : true)}>View profile</button>
                {showProfile && <ProfileUpdate />}
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <p>Upload images to gallery!</p>
            </div>
        </>
    )
}

export default Admin