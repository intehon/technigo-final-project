import mongoose from 'mongoose'

const RoleSchema = mongoose.Schema({
    description: String
  })

  const Role = mongoose.model('Role', RoleSchema)
  
  export default Role
