import { userPrefix } from '../../utils/server';
import api from '../api/api';

export async function login(
  email: string,
  password: string,
  setFormError: {
    (errorMessage?: string | undefined, status?: boolean | undefined): void;
    (arg0: string, arg1: boolean): void;
  }
): Promise<void | unknown> {
  try {
    const response = await api.post(`/${userPrefix}/signin`, {
      email,
      password
    });
    return response;
  } catch (e) {
    throw e;
  }
}
