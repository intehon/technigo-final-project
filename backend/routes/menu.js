import express from 'express'
import dotenv from 'dotenv'
import auth from '../middleware/auth.js'
import cloudinaryFramwork from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

import Menu from '../models/Menu.js'

dotenv.config()  

const router = express.Router()

// cloudinary setup

const cloudinary = cloudinaryFramwork.v2 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Log the configurations
console.log(dotenv.config())
console.log(cloudinary.config())

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'menus',
      allowedFormats: ['jpeg', 'jpg', 'png'],
      transformation: [{ width: 700, height: 700, crop: 'limit' }]
    }
  })
const parser = multer({ storage })

// endpoint for menu upload

router.post('/menus', parser.single('file'), async (req, res) => {
  // res.json({ fileUrl: req.file.path, fileId: req.file.filename })
  try { 
      const menu = await new Menu({ 
        name: req.body.name, 
        fileUrl: req.file.path, 
        fileId: req.file.filename 
      }).save()
      res.json({
        response: menu,
        success: true,
      })  
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

// endpoint to get menus

router.get('/menus', async (req, res) => {
  try {
  const menus = await Menu.find({}).sort({ createdAt: -1 })
  res.status(200).json({ response: menus, success: true })
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false
    })
  }
})

export default router