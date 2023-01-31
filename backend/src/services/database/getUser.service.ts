import { UserModel } from '../../modules/user/user.model';

export async function getUser(email: string) {
  return await UserModel.findOne({ email });
}
