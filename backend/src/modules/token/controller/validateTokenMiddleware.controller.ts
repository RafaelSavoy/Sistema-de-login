import { Request, Response } from 'express';
import { validateToken } from '../../../services/token/validateToken.service';

export async function validateTokenMiddleware(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const response = await validateToken(token);
    return res.status(200).json(response);
  } catch (e: any) {
    return res
      .status(e.code || 500)
      .json({ message: e.message || 'Erro desconhecido, contato o administrador do sistema.' });
  }
}
