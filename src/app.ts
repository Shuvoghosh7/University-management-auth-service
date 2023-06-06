import express, { Application } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
// import { error } from 'winston'
const app: Application = express()
app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

/* //Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // res.send('Working Sucessfully my apps')
  throw new ApiError('Error Come for Api')
  // next('Error Come for Api')
}) */

//gobal error handelar
app.use(globalErrorHandler)
export default app
