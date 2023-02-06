import { authServices } from '.';
import { UserModel } from '../../models/User';
import { TestDatabase } from '../database/testDatabase';
import { HTTPError } from '../errors/HTTPError.errors';
import { comparePassword } from '../password/comparePassword.service';
import { hashPassword } from '../password/hashPassword.service';

describe('Test auth services', () => {
  const testDatabase = new TestDatabase();
  
  beforeAll(() => {
    testDatabase.connectTestDatabase();
  });
  afterAll(() => {
    testDatabase.closeDatabase();
  });
  it('test hash and compare password', async () => {
    const password = 'Teste123@';
    const hashedPassword = hashPassword(password);
    expect(await comparePassword(hashedPassword, password)).toBeTruthy();
  });
  it('test signin service to nonexistent user', () => {
    const { email, password } = testDatabase.getTestUser();
    expect(async () => {
      return await authServices.signin({ email, password });
    }).rejects.toThrow(HTTPError);
  });
  it('test signup service', async () => {
    const response = await authServices.signup(testDatabase.getTestUser());
    expect(response).toHaveProperty('token');
    testDatabase.setUserId();
  });
  test('test signup server to duplicate user', async () => {
    expect(async () => {
      return await authServices.signup(testDatabase.getTestUser());
    }).rejects.toThrow(HTTPError);
  });
  test('test signin service', async () => {
    const response = await authServices.signin(testDatabase.getTestUser());
    expect(response).toHaveProperty('token');
  });
});
