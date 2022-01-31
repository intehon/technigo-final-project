import React, { useState } from 'react'

import ProfileUpdate from './ProfileUpdate'
import { Menu } from './Menu'
import Theme from './Theme'


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
                <Theme />
            </div>
        </>
    )
}

export default Admin