import express from 'express'

import menuRouter from './menu.js'
import themeRouter from './theme.js'
import userRouter from './user.js'

const apiRouter = express()

apiRouter.use(menuRouter)
apiRouter.use(themeRouter)
apiRouter.use(userRouter)

export default apiRouter