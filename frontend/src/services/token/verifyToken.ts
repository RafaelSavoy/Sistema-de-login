import React from 'react';
import api from '../api/api';

export async function verifyToken(token: string) {
  return await api.post('/token/validate', undefined, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
