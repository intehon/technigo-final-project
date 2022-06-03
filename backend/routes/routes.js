import express from 'express'
import auth from '../middleware/auth.js'

import userRouter from './user.js'
import loginRouter from './login.js'
import registerRouter from './register.js'
import roleRouter from './role.js'

const apiRouter = express()

apiRouter.use(loginRouter)
apiRouter.use(registerRouter)   
apiRouter.use(auth)
apiRouter.use(userRouter)
apiRouter.use(roleRouter)

export default apiRouter