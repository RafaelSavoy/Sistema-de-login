import bcrypt from 'bcrypt';

export async function comparePassword(
  dbPassword: string,
  userPassword: string
) {
  return bcrypt.compare(userPassword, dbPassword);
}
