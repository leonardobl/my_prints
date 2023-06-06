import express, { NextFunction, Request, Response } from 'express';
const app = express();
import cors from 'cors';
import routes from '@shared/routes';
import AppError from '@shared/errors/AppError';

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
