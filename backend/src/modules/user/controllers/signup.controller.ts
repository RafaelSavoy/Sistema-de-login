import { Request, Response } from 'express';
import { authServices } from '../../../services/auth';

export async function signup(req: Request, res: Response) {
  try {
    const response = await authServices.signup(req.body);
    res.status(200).json(response);
  } catch (e: any) {
    res
      .status(e.code || 500)
      .json({
        message:
          e.message || 'Erro desconhecido, contato o administrador do sistema.'
      });
  }
}
