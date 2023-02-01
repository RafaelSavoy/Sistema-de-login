import { Request, Response } from 'express';
import { services } from '../../../services/auth';

export async function signup(req: Request, res: Response) {
  try {
    const response = await services.signup(req);
    res.status(200).json(response);
  } catch (e: any) {
    res
      .status(e.code || 500)
      .json({ message: e.message || 'Erro desconhecido' });
  }
}
