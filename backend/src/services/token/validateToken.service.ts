import jwt from 'jsonwebtoken';
import { SECRET } from '../../util/server.utils';
import { HTTPError } from '../errors/HTTPError.errors';
export async function validateToken(token: string | undefined) {
  if (!token) {
    throw new HTTPError('Token necessario', 400);
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new HTTPError('Token expirado', 401);
    } else if (err instanceof jwt.JsonWebTokenError) {
      throw new HTTPError('Token inválido', 401);
    }
  }
}
