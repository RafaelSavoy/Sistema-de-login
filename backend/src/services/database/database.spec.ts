import { TestDatabase } from './testDatabase';
import { databaseServices } from './user';

describe('Test database', () => {
  const testDatabase = new TestDatabase();
  const { email } = testDatabase.getTestUser();

  let id: string;

  beforeAll(() => {
    testDatabase.connectTestDatabase();
  });
  afterAll(() => {
    testDatabase.closeDatabase();
  });
  test('save user in database', async () => {
    const response = await databaseServices.createUser(
      testDatabase.getTestUser()
    );
    expect(response._id).toBeTruthy();
    id = response._id.toString();
  });

  test('get user from database ', async () => {
    const response = await databaseServices.getUser(email);
    expect(response?._id).toBeTruthy();
  });

  test('delete user from database', async () => {
    await databaseServices.deleteUser(id);
    const user = await databaseServices.getUser(email);
    expect(user).toBeFalsy();
  });

  test('get deleted use from database', async () => {
    const user = await databaseServices.getUser(email);
    expect(user).toBeFalsy();
  });
});
