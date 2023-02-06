import { Request, Response } from 'express';
import { authServices } from '../../../services/auth';

export async function signin(req: Request, res: Response) {
  try {
    const response = await authServices.signin(req.body);
    return res.status(200).json(response);
  } catch (e: any) {
    return res
      .status(e.code || 500)
      .json({ message: e.message || 'Erro desconhecido' });
  }
}
