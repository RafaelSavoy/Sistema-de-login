import { userPrefix } from '../../utils/server';
import api from '../api/api';
import { UserLoginRequest, UserLoginResponse } from './types';

export async function login({
  email,
  password
}: UserLoginRequest): Promise<UserLoginResponse> {
  return api
    .post(`/${userPrefix}/signin`, {
      email,
      password
    })
    .then((response) => response.data)
}
