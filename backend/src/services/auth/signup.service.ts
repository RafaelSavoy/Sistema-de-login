import { databaseServices } from '../database/user';
import { HTTPError } from '../errors/HTTPError.errors';
import { tokenServices } from '../token';

export async function signup(req: SignupRequest) {
  const { email } = req;
  if (await databaseServices.getUser(email)) {
    throw new HTTPError('Esse usuário já existe', 409);
  }
  try {
    const response = await databaseServices.createUser(req);
    const { firstName, lastName, _id } = response;
    const userData = {
      _id: _id.toString(),
      firstName,
      lastName
    };
    return {
      token: tokenServices.createToken(userData),
      userData
    };
  } catch (e: any) {
    throw new Error(e);
  }
}
