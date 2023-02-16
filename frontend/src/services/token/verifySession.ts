import { AxiosResponse } from 'axios';
import { verifyToken } from './verifyToken';

interface User {
  _id: string;
  userName: string;
  logged: boolean;
}

export async function verifySession(
  user: User,
  token: string | undefined,
  callback: (err: Error | null, data: AxiosResponse<any, any> | null) => void
) {
  if (!user.logged) {
    if (!token) {
      return new Error('Token não identificado');
    } else {
      try {
        const response = await verifyToken(token);
        callback(null, response);
        return response;
      } catch (e) {
        callback(e as Error, null);
      }
    }
  }
}
