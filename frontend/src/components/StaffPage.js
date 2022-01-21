import React, { useState, useRef } from 'react'

import { API_URL } from '../utils/constants'

const StaffPage = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Profile Image
        <input type="file" ref={fileInput} />
      </label>

      <label>
        Staff Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default StaffPage















// import React, { useState, useRef, useEffect } from 'react'
// import { batch, useDispatch, useSelector } from 'react-redux'

// import { API_URL } from '../utils/constants'
// import user from '../reducers/user'
// import { useNavigate } from 'react-router-dom'


// const StaffPage = () => {
//     const fileInput = useRef()
//     const [name, setName] = useState('')
//     const [role, setRole] = useState('')

//     const accessToken = useSelector((store) => store.user.accessToken)

//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (accessToken) {
//           navigate('/staff')
//         }
//       }, [accessToken, navigate])

//     const handleFormSubmit = (e) => {
//         e.preventDefault()

//         const formData = new FormData()
//         formData.append('image', fileInput.current.files[0])
//         formData.append('name', name)
//         formData.append('role', role)

//         const options = {
//             method: 'POST',
//             // headers: {
//             //     'content-type': 'multipart/form-data'
//             // },
//             body: formData
//         }

//         fetch(API_URL('staff'), options)
//         .then((res) => res.json())
//         .then((data) => {
//             batch(() => {
//                 dispatch(user.actions.setUserId(data.response.userId))
//                 dispatch(user.actions.setName(data.response.name))
//                 dispatch(user.actions.setRole(data.response.role))
//                 dispatch(user.actions.fileInput(data.ref.fileInput.current.files[0]))
//             })
//         })
//     }

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