import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import cloudinaryFramwork from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { uuid } from 'uuidv4'

import User from './models/User.js'
import Role from './models/Role.js'

dotenv.config()

const cloudinary = cloudinaryFramwork.v2
cloudinary.config({
  cloud_name: 'dabppspye',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'staff-avatars',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 165, height: 165, crop: 'limit' }],
  },
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/')
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuid() + '-' + fileName)
  },
})


const parser = multer({ cloudinaryStorage })
const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == 'image/png' || 'application/pdf' || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true)
   } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg, .jpeg and .pdf format allowed!'))
    }
  }
})

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise 

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   accessToken: {
//     type: String,
//     default: () => crypto.randomBytes(128).toString('hex'),
//   },
//   name: {
//     type: String,
//     minlength: 2,
//     maxlength: 50,
//   },
//   role: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Role'
//   },
//   imageUrl: String
// })

// const RoleSchema = mongoose.Schema({
//   description: String
// })

// const User = mongoose.model('User', UserSchema)
// const Role = mongoose.model('Role', RoleSchema)

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

//middleware to check if everything is ok before moving on (1 = all is good)

app.use((req, res, next) => {
	return (mongoose.connection.readyState === 1) 
		? next()
	  : res.status(503).json({ error: 'Cannot connect to server' })
	})


const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')

  try {
    const user = await User.findOne({ accessToken })
    if (user) {
      next()
    } else {
      res.status(401).json({ response: "please login", success: false })
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
}

// Start defining your routes here
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// endpoint for signing up

app.post('/signup', parser.single('image'), async (req, res) => {
  const { username, password, email } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (password.length < 5) {
      throw "password must be at least 5 characters long" 
    }

    const newUser = await new User({
      username,
      email,
      // name,
      // role,
      // imageUrl,
      password: bcrypt.hashSync(password, salt)
    }).save()
    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        // name: newUser.name,
        // role: newUser.role,
        // imageUrl: newUser.imageUrl,
        accessToken: newUser.accessToken,
      },
      success: true,
    })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})


// endpoint for signing in

app.post('/login', async (req, res) => {
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
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

// endpoint for role
 
app.post('/role', async (req, res) => {
  const { description } = req.body

  try {
    const newRole = await new Role({ description }).save()
    res.status(201).json({ response: newRole, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

// endpoint for users

app.get('/users', async (req, res) => {
  const users = await User.find({}).sort({ name: 1 }).populate('role')
  res.status(200).json({ response: users, success: true })
})

// endpoint to update user w. role and name

app.patch('/users/:userId/update', parser.single('image'), async (req, res) => {
  const { userId } = req.params
  const { role, name } = req.body

  try {
    const queriedRole = await Role.findById(role)
    const updatedUser = await User.findByIdAndUpdate( userId, { name, role: queriedRole, imageUrl: req.file.path, imageId: req.file.filename }, { new: true })
    res.status(200).json({
      response: updatedUser,
      success: true
    })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

// get single user by id

app.get('/users/:userId', async (req, res) => {
  const { userId } = req.params

  try {
  const user = await User.findById(userId).populate('role')
  res.status(200).json({ response: user, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false})
  }
})

// delete users

app.delete('/users/:userId', async (req, res) => {
  const { userId } = req.params

  try {
    const deletedUser = await User.findOneAndDelete({ _id: userId })
    res.status(200).json({ response: deletedUser, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

// endpoint for file uploads

app.post('/files', upload.single('file', 'image'), async (req, res) => {
  try { 
	  res.json({ file: req.file.path, fileId: req.file.filename})
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

// endpoint to get menus

app.get('/files', async (req, res) => {
  const files = await files.find({contentType: "application/pdf"}).sort({ name: 1 })
  res.status(200).json({ response: users, success: true })
})

// app.use((req, res, next) => {
//   return mongoose.connection.readyState === 1
//   ? next()
//   : res.status(503).send({ error: 'Cannot connect to server' })
// })

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port} ~'(@)~'`)
})