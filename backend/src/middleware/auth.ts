import type{ Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define the shape of your JWT payload
interface UserPayload {
  id: string;
  email: string;
  role: string;
}

// Extend the Express Request type to include the user object
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

const SECRET_KEY = process.env.JWT_SECRET || 'your-ultra-secure-secret';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // 1. Get token from header (Format: "Bearer <token>")
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, SECRET_KEY) as UserPayload;
    
    // 3. Attach user data to request
    req.user = decoded;
    
    next(); // Move to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};