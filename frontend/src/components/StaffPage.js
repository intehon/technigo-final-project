import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import ProfileUpdate from './ProfileUpdate'
import user from '../reducers/user'



const StaffPage = () => {
    return (
        <>
            <div>
                <Link to='/update-profile'>
                    Update profile
                </Link>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default StaffPage