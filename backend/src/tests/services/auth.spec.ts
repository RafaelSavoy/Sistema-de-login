import { authServices } from '../../services/auth';
import { HTTPError } from '../../services/errors/HTTPError.errors';
import { TestDatabase } from '../../util/testdatabase.util';

describe('Testing auth services', () => {
  const testDatabase = new TestDatabase();
  const fakeUser = testDatabase.getTestUser();
  const { email, password } = fakeUser;
  beforeAll(() => {
    testDatabase.connectTestDatabase();
  });
  afterAll(() => {
    testDatabase.closeDatabase();
  });
  it('should not be possible signin a nonexistent user', () => {
    expect(
      async () => await authServices.signin({ email, password })
    ).rejects.toThrow(HTTPError);
  });
  it('should be possible to signup a user', async () => {
    const response = await authServices.signup(fakeUser);
    expect(response).toHaveProperty('token');
    expect(response).toHaveProperty('userData');
  });
  it('should not be possible to signup a existent user', async () => {
    expect(async () => await authServices.signup(fakeUser)).rejects.toThrow(
      HTTPError
    );
  });
  it('should be possible to signin a user', async () => {
    const response = await authServices.signin({ email, password });
    expect(response).toHaveProperty('token');
    expect(response).toHaveProperty('userData');
  });
  it('not should be possible to signin a user with a wrong password', async () => {
    expect(
      async () =>
        await authServices.signin({
          email,
          password: 'wrongPassword'
        })
    ).rejects.toThrow(HTTPError);
  });
  it('not should be possible to signin a user with a wrong email', async () => {
    expect(
      async () =>
        await authServices.signin({
          email: 'wrong@email.com',
          password
        })
    ).rejects.toThrow(HTTPError);
  });
});
