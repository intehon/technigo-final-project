import express from 'express'
import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import User from '../models/User.js'

const router = express.Router()
// dotenv.config()

// endpoint for signing in

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ 
        response: 'Username and password are required',
        success: false
     })

    try {
        const user = await User.findOne({ username })
        if (!user) return res.sendStatus(401) // unauthorized
        // evaluate password
        if (user && bcrypt.compareSync(password, user.password)) {
            // const accessToken = jwt.sign(
            //     { 
            //         "username": user.username,
            //         "userId": user._id 
            //     },
            //     process.env.ACCESS_TOKEN_SECRET,
            //     { expiresIn: '30s' }
            // )
            // const refreshToken = jwt.sign(
            //     { 
            //         "username": user.username,
            //         "userId": user._id 
            //     },
            //     process.env.REFRESH_TOKEN_SECRET,
            //     { expiresIn: '1d' }
            // )
            // const currentUser = { ...user, refreshToken }
            
            // res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            // res.status(200).json({ 
            //     response: {
            //         username: currentUser.username,
            //         accessToken
            // }
            // })
        res.status(200).json({
            response: {
            userId: user._id,
            username: user.username,
            accessToken: user.accessToken,
            },
            success: true,
        })
        } else {
        res.status(404).json({
            response: 'Invalid username or password',
            success: false,
        })
        }
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
})

export default router