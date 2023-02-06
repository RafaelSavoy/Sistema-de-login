import { createUser } from './createUser.service';
import { getUser } from './getUser.service';
import { deleteUser } from './deleteUser.service';

export const databaseServices = {
  createUser,
  getUser,
  deleteUser
};
