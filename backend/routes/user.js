import express from 'express'

import User from '../models/User.js'
import Role from '../models/Role.js'

const router = express.Router()

// endpoint to get users

router.route('/users')
    .get(async (req, res) => {
    const users = await User.find({}).sort({ name: 1 }).populate('role')
    res.status(200).json({ response: users, success: true })
    })

// endpoint to get, update and delete single user

router.route('/users/:userId')
    .get(async (req, res) => {
        const { userId } = req.params
    
        try {
            const user = await User.findById(userId).populate('role')
            res.status(200).json({ response: user, success: true })
        } catch (error) {
            res.status(400).json({ response: error, success: false})
        }
    })
    .patch(async (req, res) => {
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
    .delete(async (req, res) => {
        const { userId } = req.params
    
        try {
            const deletedUser = await User.findOneAndDelete({ _id: userId })
            res.status(200).json({ response: deletedUser, success: true })
        } catch (error) {
            res.status(400).json({ response: error, success: false })
        }
    })

export default router