import express from 'express'

import menuRouter from './menu.js'
import themeRouter from './theme.js'
import userRouter from './user.js'
import loginRouter from './login.js'
import registerRouter from './register.js'

const apiRouter = express()

apiRouter.use(menuRouter)
apiRouter.use(themeRouter)
apiRouter.use(userRouter)
apiRouter.use(loginRouter)
apiRouter.use(registerRouter)

export default apiRouter