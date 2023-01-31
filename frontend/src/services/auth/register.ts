import api from '../api/api';

export async function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return api.post('/users/signup', {
    firstName,
    lastName,
    email,
    password,
  });
}
