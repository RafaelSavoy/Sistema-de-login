import { databaseServices } from '../database/user';
import { HTTPError } from '../errors/HTTPError.errors';

import { createToken } from '../token';
import { comparePassword } from '../password/comparePassword.service';

export async function signin({
  email,
  password
}: SigninRequest): Promise<SigninResponse> {
  const user = await databaseServices.getUser(email);
  if (!user) {
    throw new HTTPError('Email ou senha inválidos', 401);
  }
  const result = await comparePassword(password, user?.password as string);
  if (!result) {
    throw new HTTPError('Email ou senha inválidos', 401);
  }
  const userData = {
    _id: user?._id.toString(),
    firstName: user?.firstName,
    lastName: user?.lastName
  };
  return {
    token: createToken(userData)
  };
}
