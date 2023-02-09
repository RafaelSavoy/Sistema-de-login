import bcrypt from 'bcrypt';

export function comparePassword(userPassword: string, dbPassword: string) {
  return bcrypt.compare(userPassword, dbPassword);
}
