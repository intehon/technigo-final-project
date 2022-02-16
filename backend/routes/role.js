import express from 'express'

import Role from '../models/Role.js'

const router = express.Router()

// endpoint for role

router.route('/roles')
    .get(async (req, res) => {
    const roles = await Role.find({})
    res.status(200).json({ response: roles, success: true })
    })

    .post(async (req, res) => {
    const { description } = req.body

    try {
        const newRole = await new Role({ description }).save()
        res.status(201).json({ response: newRole, success: true })
    } catch (error) {
        res.status(400).json({ response: error, success: false })
    }
    })

export default router