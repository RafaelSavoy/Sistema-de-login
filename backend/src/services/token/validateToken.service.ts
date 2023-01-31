import jwt, { JwtHeader, JwtPayload } from 'jsonwebtoken';
import { SECRET } from '../../util/server.utils';

interface TokenPayload {
  _id: string;
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
}

export function validateToken(token: string): Promise<TokenPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      const payload = decoded as TokenPayload;
      if (err) {
        reject(err);
      } else {
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTime) {
          reject(new Error('Token expirado'));
        } else {
          resolve(payload);
        }
      }
    });
  });
}
