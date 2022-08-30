import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import 'express-async-errors'
import morgan from 'morgan'
import authenticateUser from './middleware/auth.js'

// routes 
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";


const app = express();
dotenv.config();

if(process.env.NODE_ENV !== "production") {
  app.use(morgan('dev'))
}

app.use(express.json())

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/build' )))

// controllers
app.use('/api/v1/auth', authRouter)

// private
app.use('/api/v1/jobs',authenticateUser, jobsRouter)

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (e) {
    console.log(e);
  }
};

start()