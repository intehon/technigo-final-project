import mongoose from 'mongoose'
import crypto from 'crypto'

// import ROLES_LIST from '../config/roles_list'

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
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
      ref: 'Role',
      default: '620d517a466349ce0787db0a'
    }, 
    // role: {
    //   type: String,
    //   default: ROLES_LIST.Staff
    // }
  })

const User = mongoose.model('User', UserSchema)

export default User