import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import user from '../reducers/user'
import { API_URL } from '../utils/constants'

const StaffPage = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')
  const [role, setRole] = useState('Staff')

  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
      if (accessToken) {
          navigate('/staff')
      }
  }, [accessToken, navigate])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)
    formData.append('role', role)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }

    fetch(API_URL(`users/${userId}/update`), options)
      .then((res) => res.json())
      .then((json) => {
        fetch(API_URL('staff'), options)
        .then((res) => res.json())
        .then((data) => {
            batch(() => {
                dispatch(user.actions.setUserId(data.response.userId))
                dispatch(user.actions.setName(data.response.name))
                dispatch(user.actions.setRole(data.response.role))
                dispatch(user.actions.fileInput(data.ref.fileInput.current.files[0]))
            })
        })
      })
  }

  return (
      <div>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>
                    Profile Image
                    <input type="file" ref={fileInput} />
                </label>
            </div>

            <div>
                <label>
                    Staff Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>

            <div>
                <input 
                type="radio" 
                value="Owner" 
                checked={role === 'Owner'}
                onChange={(e) => setRole(e.target.value)}
                /> Owner
                <input 
                type="radio" 
                value="Admin" 
                checked={role === 'Admin'}
                onChange={(e) => setRole(e.target.value)}
                /> Admin
                <input 
                type="radio" 
                value="Manager" 
                checked={role === 'Manager'}
                onChange={(e) => setRole(e.target.value)}
                /> Manager
                <input 
                type="radio" 
                value="Staff" 
                checked={role === 'Staff'}
                onChange={(e) => setRole(e.target.value)}
                /> Staff
            </div>

            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default StaffPage




        
//    }

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//             <div>
//                 <label>
//                     Profile Image
//                     <input type="file" ref={fileInput} />
//                 </label>
//             </div>

//             <div>
//                 <label>
//                     Name
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 </label>
//             </div>

//             <div>
//                 <label>
//                     <input type="radio" value={role} onChange={(e) => setRole(e.target.value)} />
//                     <label for="Owner">Owner</label>
//                     <input type="radio" value={role} onChange={(e) => setRole(e.target.value)} />
//                     <label for="Admin">Admin</label>
//                     <input type="radio" value={role} onChange={(e) => setRole(e.target.value)} />
//                     <label for="Manager">Manager</label>
//                     <input type="radio" value={role} onChange={(e) => setRole(e.target.value)} />
//                     <label for="Staff">Staff</label>
//                 </label>
//             </div>

//             <div>
//                 <button type="submit">
//                     Submit
//                 </button>
//             </div>
//             </form>
//         </div>
//     )
// }

// export default StaffPage