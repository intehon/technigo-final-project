import express from 'express'
import bcrypt from 'bcrypt'

import User from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body
    if (!username || !password) return res.status(400).json({ 
        response: 'Username and password are required',
        success: false
     })
     // check for duplicate username in the db
     const duplicate = await User.findOne({ username: req.body.username })
     if (duplicate) return res.sendStatus(409) //conflict

    try {
        // encrypt password
        const salt = bcrypt.genSaltSync()

        if (password.length < 8) {
        throw "Password must be at least 8 characters long" 
        }
        if (!email.includes('@')) {
        throw "Email must include an @"
        }

        //store new user
        const newUser = await new User({
        username,
        email,
        password: bcrypt.hashSync(password, salt)
        }).save()
      
        res.status(201).json({
        response: {
            userId: newUser._id,
            username: newUser.username,
            email: newUser.email,
            accessToken: newUser.accessToken,
        },
        success: true,
        })
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
})

export default router