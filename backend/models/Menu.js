import mongoose from 'mongoose'

const MenuSchema = mongoose.Schema({
    fileUrl: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
})

const Menu = mongoose.model('Menu', MenuSchema)
  
export default Menu
