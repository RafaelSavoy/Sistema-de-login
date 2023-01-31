import { Request, Response } from 'express';
import { services } from '../../../services/auth';

export async function signin(req: Request, res: Response) {
  try {
    const response = await services.signin(req);
    return res.status(200).json(response)
  } catch (e) {
    return res
      .status(e.code || 500)
      .json({ message: e.message || 'Erro desconhecido' });
  }
}
