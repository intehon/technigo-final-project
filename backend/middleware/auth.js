import User from '../models/User.js'

const auth = async (req, res, next) => {
    const accessToken = req.header('Authorization')
  
    try {
      const user = await User.findOne({ accessToken })
      if (user) {
        next()
      } else {
        res.status(401).json({ response: "Please login", success: false })
      }
    } catch (error) {
      res.status(400).json({ response: error, success: false })
    }
  }

  export default auth