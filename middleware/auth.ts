import { Request, Response, NextFunction } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';


export interface DecodedUser {
  user : User | undefined;
  id?: string;
}

interface User {
  id?: string;
  name?: string;
  mobile?:string;
  username?: string;
}

declare global {
    namespace Express {
      interface Request {
        user?: DecodedUser | undefined;
      }
    }
  }
  
export default function(req: Request, res: Response, next: NextFunction) {
  // Get Token from header
  const token: string | undefined = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  try {
    // const decoded = jwt.verify(token, config.get<string>('jwtSecret')) as DecodedUser;
    const decoded = jwt.verify(token, 'top_secret') as DecodedUser;
    req.user = decoded.user as DecodedUser;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid." });
  }
};