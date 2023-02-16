import { UserModel } from '../../../models/User';

interface User {
  userName: string;
  email: string;
  password: string;
}

export async function createUser(user: User) {
  return UserModel.create(user);
}
