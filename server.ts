import express, { Request, Response } from 'express';
import {connectToDatabase} from './utils/database';
import dotenv from 'dotenv';
import userRouter from './routes/users';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import cors from 'cors';

// interface DecodedUser {
//     user: string; // Assuming user is of type string, update according to your user schema
//   }

// declare global {
//     namespace Express {
//       interface Request {
//         user?: DecodedUser;
//       }
//     }
//   }

dotenv.config(); 

const app = express();
app.use(cors())
app.use(bodyParser.json());
const port = 5000;

connectToDatabase('kapilSharma', 'ruchi1727');

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Benesse India Assessment');
});

// Define Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});