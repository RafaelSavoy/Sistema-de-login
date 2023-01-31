import { AxiosResponse } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import api from '../api/api';
import { verifyToken } from './verifyToken';

interface User {
  firstName: string;
  lastName: string;
  id: string;
  logged: boolean;
}

export async function verifySession(
  token: string | undefined,
  user: User,
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
