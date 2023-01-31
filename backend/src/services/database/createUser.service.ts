import { UserModel } from '../../modules/user/user.model';
import { HTTPError } from '../errors/HTTPErrors.errors';
import { createToken } from '../token';

interface User {
  firstName: string;
  password: string;
  lastName: string;
  email: string;
}

export async function createUser(user: User) {
  return UserModel.create(user)
    .then((data) => {
      const { firstName, lastName, _id } = data;
      const token = createToken({
        firstName,
        lastName,
        _id: _id.toString(),
      });
      return { userData: { firstName, lastName, _id }, token };
    })
    .catch(() => {
      throw new HTTPError('Erro ao salvar usuário no sistema', 500);
    });
}
