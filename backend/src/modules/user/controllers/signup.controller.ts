import { Request, Response } from 'express';
import { services } from '../../../services/auth';

export async function signup(req: Request, res: Response) {
  try {
    const response = await services.signup(req);
    res.status(200).json(response);
  } catch (err) {
    res
      .status(err.code || 500)
      .json({ message: err.message || 'Erro desconhecido' });
  }
}
