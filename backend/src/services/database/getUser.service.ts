import { UserModel } from '../../models/User';

export async function getUser(email: string) {
  return await UserModel.findOne({ email });
}
