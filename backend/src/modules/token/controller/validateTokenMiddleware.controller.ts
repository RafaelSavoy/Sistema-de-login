import { Request, Response } from 'express';
import { validateToken } from '../../../services/token/validateToken.service';

export async function validateTokenMiddleware(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(400).json({ message: 'Token necessário' });
  }
  try {
    const response = await validateToken(token);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}
