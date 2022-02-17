import express from 'express'
import bcrypt from 'bcrypt'

import User from '../models/User.js'

const router = express.Router()

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