import bcrypt from 'bcrypt';

export async function comparePassword(
  dbPassword: string,
  userPassword: string
) {
  console.log(dbPassword,userPassword)
  return await bcrypt.compare(userPassword,dbPassword);
}
