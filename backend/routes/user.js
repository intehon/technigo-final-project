import express from 'express'
import bcrypt from 'bcrypt'

import auth from '../middleware/auth.js'

import User from '../models/User.js'
import Role from '../models/Role.js'

const router = express.Router()


// endpoint for signing up

router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body

    try {
        const salt = bcrypt.genSaltSync()

        if (password.length < 8) {
        throw "Password must be at least 8 characters long" 
        }

        if (!email.includes('@')) {
        throw "Email must include an @"
        }

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


// endpoint for signing in

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username })

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
            response: 'Invalid email or password',
            success: false,
        })
        }
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
})

// endpoint for users

router.get('/users', async (req, res) => {
    const users = await User.find({}).sort({ name: 1 }).populate('role')
    res.status(200).json({ response: users, success: true })
})


// endpoint for admin

router.get('/admin', auth)


// endpoint for role

router.post('/role', async (req, res) => {
    const { description } = req.body

    try {
        const newRole = await new Role({ description }).save()
        res.status(201).json({ response: newRole, success: true })
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
})


// endpoint to update user w. role and name

router.patch('/users/:userId/update', async (req, res) => {
    const { userId } = req.params
    const { role, name, email } = req.body

    try {
        const queriedRole = await Role.findById(role)
        const updatedUser = await User.findByIdAndUpdate( userId, { name, email, role: queriedRole }, { new: true })
        res.status(200).json({
            response: updatedUser,
            success: true
    })
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
})

// get single user by id

router.get('/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const user = await User.findById(userId).populate('role')
        res.status(200).json({ response: user, success: true })
    } catch (error) {
        res.status(400).json({ response: error, success: false})
    }
})

// delete users

router.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const deletedUser = await User.findOneAndDelete({ _id: userId })
        res.status(200).json({ response: deletedUser, success: true })
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
})

export default router