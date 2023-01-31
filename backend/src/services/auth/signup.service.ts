import { Request } from 'express';
import { createUser, getUser } from '../database';
import { HTTPError } from '../errors/HTTPErrors.errors';

export async function signup(req: Request) {
  const { email } = req.body;
  const user = await getUser(email);
  if (user) throw new HTTPError('Esse usuário já existe', 409);
  const response = await createUser(req.body);
  return response;
}
