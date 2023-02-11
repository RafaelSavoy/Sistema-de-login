import { userPrefix } from '../../utils/server';
import api from '../api/api';

export async function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return api.post(`/${userPrefix}/signup`, {
    firstName,
    lastName,
    email,
    password
  });
}
