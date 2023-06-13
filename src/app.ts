import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/', routes);

//Testing
// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'))
// })

app.use(globalErrorHandler)

export default app
