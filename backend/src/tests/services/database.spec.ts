import { databaseServices } from '../../services/database/user';
import { TestDatabase } from '../../util/testdatabase.util';

describe('Testing database functions', () => {
  const testDatabase = new TestDatabase();
  const fakeUser = testDatabase.getTestUser();
  const { email } = fakeUser;
  beforeAll(async () => {
    await testDatabase.connectTestDatabase();
  });
  afterAll(async () => {
    await testDatabase.closeDatabase();
  });
  it('should be possible to create a user', async () => {
    const response = await databaseServices.createUser(fakeUser);
    expect(response?._id).toBeTruthy();
  });
  it('should be possible to get a user', async () => {
    const response = await databaseServices.getUser(email);
    expect(response?._id).toBeTruthy();
    testDatabase.setUserId(response?._id.toString());
  });
  it('should be possible to delete a user', async () => {
    await databaseServices.deleteUser(fakeUser._id!);
    const response = await databaseServices.getUser(email);
    expect(response).toBeFalsy();
  });
});
