import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

app.use('/api/v1/', routes);

//Testing
// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'))
// })

app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server`,
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Not Found',
      },
    ],
  });
  next();
});

export default app;
