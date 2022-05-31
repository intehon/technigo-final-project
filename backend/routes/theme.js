import express from 'express'
import dotenv from 'dotenv'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinaryFramwork from 'cloudinary'
import multer from 'multer'
import auth from '../middleware/auth.js'

import Theme from '../models/Theme.js'

const router = express.Router()

dotenv.config()

// Coudinary setup

const cloudinary = cloudinaryFramwork.v2
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'theme-gallery',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 700, height: 700, crop: 'limit' }]
  }
})
const parser = multer({ storage })

// endpoint for theme uploads

router.post('/themes', auth, parser.single('image'), async (req, res) => {
    try { 
      const theme = await new Theme({ name: req.body.name, imageUrl: req.file.path, imageId: req.file.filename, description: req.body.description }).save()
        res.json({
          response: theme,
          success: true,
        })
    } catch (error) {
      res.status(400).json({ response: error, success: false })
    }
  })
  
// endpoint to get themes
  
router.get('/themes', async (req, res) => {
    try {
      const files = await Theme.find({}).sort({ createdAt: -1 })
      res.status(200).json({ response: files, success: true })
    } catch (error) {
      res.status(400).json({
        response: error,
        success: false
      })
    }
  })

    export default router