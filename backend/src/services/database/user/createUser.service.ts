import { UserModel } from '../../../models/User';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function createUser(user: User) {
  return UserModel.create(user);
}
