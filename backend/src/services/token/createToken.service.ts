import jwt from 'jsonwebtoken';
import { SECRET } from '../../util/server.utils';

type User = {
  _id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
};

export function createToken({ lastName, firstName, _id }: User) {
  const token = jwt.sign({ _id, firstName, lastName }, SECRET, {
    expiresIn: '1 day',
  });
  return token;
}
