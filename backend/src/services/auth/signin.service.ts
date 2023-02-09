import { databaseServices } from '../database/user';
import { HTTPError } from '../errors/HTTPError.errors';

import { comparePassword } from '../password/comparePassword.service';
import { tokenServices } from '../token';

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
  const { firstName, lastName, _id } = user;
  const userData = {
    _id: _id.toString(),
    firstName,
    lastName
  };
  return {
    token: tokenServices.createToken(userData),
    userData
  };
}
