import jwt from 'jsonwebtoken';
import { SECRET } from '../../util/server.utils';

interface User {
  _id: string | undefined;
  userName: string | undefined;
}

export function createToken({ userName, _id }: User): string {
  const token = jwt.sign({ userName, _id }, SECRET, {
    expiresIn: '1 day'
  });
  return token;
}
