import { Request, Response, NextFunction } from 'express';

export const checkRoles = (req: Request, res: Response, next: NextFunction) => {
  next();
}