import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'


import router from './routes/router.js'

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())
app.use(router)

//middleware to check if everything is ok before moving on (1 = all is good)

app.use((req, res, next) => {
	return (mongoose.connection.readyState === 1) 
		? next()
	  : res.status(503).json({ error: 'Cannot connect to server' })
	})


// Start defining your routes here
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port} ~'(@)~'`)
})