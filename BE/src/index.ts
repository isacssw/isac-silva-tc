import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { asteroidsRoutes } from './routes/asteroids.routes'

const app = express()

app.use(express.json())

app.use('/', asteroidsRoutes)

app.use((req, res, next) => {
  const error = new Error('not found')
  return res.status(404).json({
    message: error.message,
  })
})

export { app }
