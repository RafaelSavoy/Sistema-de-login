import { UserModel } from '../../../models/User';

export async function deleteUser(_id: string) {
  return UserModel.findByIdAndDelete(_id);
}
