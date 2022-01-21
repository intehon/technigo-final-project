import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import cloudinaryFramwork from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

dotenv.config()

const cloudinary = cloudinaryFramwork.v2
cloudinary.config({
  cloud_name: 'dabppspye',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'staff-avatars',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 165, height: 165, crop: 'limit' }],
  },
})

const parser = multer({ storage })

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise 

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  imageUrl: String
})

const RoleSchema = mongoose.Schema({
  description: String
})

const User = mongoose.model('User', UserSchema)

const Role = mongoose.model('Role', RoleSchema)

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

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
  const { username, password, email, name, role, imageUrl } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (password.length < 5) {
      throw "password must be at least 5 characters long" 
    }

    const newUser = await new User({
      username,
      email,
      name,
      role,
      imageUrl,
      password: bcrypt.hashSync(password, salt)
    }).save()
    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
        imageUrl: newUser.imageUrl,
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
  const users = await User.find({}).sort({ name: 1 })
  res.status(200).json({ response: users, success: true })
})

// endpoint to update user w. role and name

app.post('/users/:userId/update', parser.single('image'), async (req, res) => {
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

// endpoint to update user image

// app.post('/users/:userId/image', parser.single('image'), async (req, res) => {
//   res.json({ imageUrl: req.file.path, imageId: req.file.filename })
// })

// get single user by id

app.get('/users/:userId', async (req, res) => {
  const { userId } = req.params

  const user = await User.findById(userId).populate('role')
  res.status(200).json({ response: user, success: true })
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

// endpoint for images 

// app.post('/images', parser.single('image'), async (req, res) => {
// 	res.json({ imageUrl: req.file.path, imageId: req.file.filename})
// })  

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port} ~'(@)~'`)
})
