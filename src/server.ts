import express from 'express'
import { routes } from './routes/router'

const App = express()

App.use(routes)

export { App }