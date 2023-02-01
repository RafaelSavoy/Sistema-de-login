const dbUser: string = process.env.DB_USER || '';
const dbPassword: string = process.env.DB_PASSWORD || '';
const dbHost: string = process.env.DB_HOST || '';
const dbName: string = process.env.DB_NAME || '';

export const mongoUri: string = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&
w=majority`;
