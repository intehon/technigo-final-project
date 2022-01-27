import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        username: null,
        email: null,
        accessToken: null,
        error: null
    },
    reducers: {
        setUserId: (store, action) => {
            store.userId = action.payload
        },
        setUserName: (store, action) => {
            store.username = action.payload
        },
        setEmail: (store, action) => {
            store.email = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setError: (store, action) => {
            store.error = action.payload
        },
    }
})

export default user















// import { createSlice } from '@reduxjs/toolkit'
// import { API_URL } from '../utils/constants'

// const initialState = {
//         userId: localStorage.userId || null,
//         username: localStorage.username || null,
//         email: localStorage.email || null,
//         accessToken: localStorage.accessToken || null,
//         error: null
// }

// export const user = createSlice({
//     name: 'user',
//     initialState: initialState,
//     reducers: {
//         setLogin: (store, action) => {
//             const { userId, username, email, accessToken } = action.payload
//             store.userId = userId
//             store.username = username
//             store.email = email
//             store.accessToken = accessToken
//             localStorage.setItem('userId', userId)
//             localStorage.setItem('username', username)
//             localStorage.setItem('email', email)
//             localStorage.setItem('accessToken', accessToken)
//         },
//         setError: (store, action) => {
//             store.error = action.payload
//         }
//     }       
// })

// export const signup =  (username, email, password) => {
//       return (dispatch) => {

//         const options = {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, password, email }),
//           }

//         dispatch(user.actions.setError({ errorMessage: null }))
//         fetch(API_URL('signup'), options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           console.log('data', data)
//           dispatch(
//               user.actions.setLogin({
//                 userId: data.userId,
//                 username: data.username,
//                 email: data.email,
//                 accessToken: data.accessToken
//               })
//           )
//         } else {
//           dispatch(user.actions.setError({ errorMessage: null }))
//             alert("Username already taken!")
//           }
//         })
//     }
// }

// export const login = (username, password) => {
//     return (dispatch) => {

//         const options = {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//           }
          
//       fetch(API_URL('login'), options)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.success) {
//             dispatch(
//                 user.actions.setLogin({
//                     accessToken: data.accessToken,
//                     userId: data.userId,
//                     username: data.username
//                 })
//             )
//           } else {
//               dispatch(user.actions.setError({ errorMessage: null }))
//             }
//           })
//         }
//     }