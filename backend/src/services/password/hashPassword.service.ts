import bcrypt from 'bcrypt';

export async function hashPassword(userPassword: string): Promise<string> {
  const hash = bcrypt.hash(userPassword, 10);
  return await hash;
}
