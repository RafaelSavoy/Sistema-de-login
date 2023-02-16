import { userPrefix } from '../../utils/server';
import api from '../api/api';
import { UserRegisterRequest, UserRegisterResponse } from './types';

export async function register({
  userName,
  email,
  password
}: UserRegisterRequest): Promise<UserRegisterResponse> {
  return api
    .post(`/${userPrefix}/signup`, {
      userName,
      email,
      password
    })
    .then((response) => response.data);
}
