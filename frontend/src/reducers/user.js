import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    username: null,
    email: null,
    name: null,
    role: null,
    image: null,
    accessToken: null,
    error: null
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
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
        setName: (store, action) => {
            store.name = action.payload
        },
        setRole: (store, action) => {
            store.role = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setError: (store, action) => {
            store.error = action.payload
        },
        setInitialState: (store, action) => {
            return initialState
            }
    }
})

export default user







// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//         userId: null,
//         username: null,
//         email: null,
//         name: null,
//         role: null,
//         accessToken: null,
//         error: null
//     }

//     const user = createSlice({
//         name: 'user',
//         initialState,
//         reducers: {
//                 setUserData: (store, action) => {
//                     store.userId = action.payload.userId
//                     store.username = action.payload.username
//                     store.email = action.payload.email
//                     store.name = action.payload.name
//                     store.role = action.payload.role
//                     store.accessToken = action.payload.accessToken
//                     store.error = action.payload.error
//                     store.userId = action.payload.userId
//                     },
//                     setError: (store, action) => {
//                         store.error = action.payload.error
//                     },
//                     setInitialState: (store, action) => {
//                         return initialState
//                     }
//         }
// })

// export default user