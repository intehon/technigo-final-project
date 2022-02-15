import mongoose from 'mongoose'

const ThemeSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    description: {
        type: String,
        maxlength: 1500,
    }
})

const Theme = mongoose.model('Theme', ThemeSchema)
  
export default Theme
