import bcrypt from 'bcrypt';

export function hashPassword(userPassword: string) {
  return bcrypt.hashSync(userPassword, 10);
}
