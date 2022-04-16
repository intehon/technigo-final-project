import express from 'express'
// import auth from '../middleware/auth.js'

import menuRouter from './menu.js'
import themeRouter from './theme.js'
import userRouter from './user.js'
import loginRouter from './login.js'
import registerRouter from './register.js'
import roleRouter from './role.js'

const apiRouter = express()

apiRouter.use(loginRouter)
apiRouter.use(registerRouter)   
apiRouter.use(menuRouter)
apiRouter.use(themeRouter)
// apiRouter.use(auth)
apiRouter.use(userRouter)
apiRouter.use(roleRouter)

export default apiRouter