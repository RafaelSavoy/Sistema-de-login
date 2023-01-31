import { Request } from 'express';
import { createUser, getUser } from '../database';
import { HTTPError } from '../errors/HTTPErrors.errors';
import { createToken } from '../token';
import { comparePassword } from './comparePassword.service';

export async function signin(req: Request) {
  const { email, password } = req.body;
  const user = await getUser(email);
  const result = await comparePassword(password, user?.password as string);
  if (!user || !result) {
    console.log(result)
    throw new HTTPError('Email ou senha inválidos', 401);
  }
  const userData = {
    _id: user?._id.toString(),
    firstName: user?.firstName,
    lastName: user?.lastName,
  };
  return {
    userData,
    token: createToken(userData),
  };
}
