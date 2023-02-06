import { databaseServices } from '../database/user';
import { HTTPError } from '../errors/HTTPError.errors';
import { createToken } from '../token';

export async function signup(req: SignupRequest) {
  const { email } = req;
  if (await databaseServices.getUser(email)) {
    throw new HTTPError('Esse usuário já existe', 409);
  }
  try {
    const response = await databaseServices.createUser(req);
    const { firstName, lastName, _id } = response;
    const token = createToken({
      firstName,
      lastName,
      _id: _id.toString()
    });
    return { token };
  } catch (e) {
    throw new HTTPError('Erro ao salvar usuário no sistema', 500);
  }
}
