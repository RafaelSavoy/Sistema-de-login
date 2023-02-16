import { app } from '../../app';
import request from 'supertest';
import { TestDatabase } from '../../util/testdatabase.util';

describe('Signin route', () => {
  const testDatabase = new TestDatabase();
  const fakeUser = testDatabase.getTestUser();
  const { email, password } = fakeUser;
  beforeAll(() => {
    testDatabase.connectTestDatabase();
  });
  afterAll(() => {
    testDatabase.closeDatabase();
  });
  it('should not be login to a nonexistent user', async () => {
    const response = await request(app).post('/user/signin').send({
      email,
      password
    });
    expect(response.status).toBe(401);
  });
  it('should not be possible to signup user with a invalid password', async () => {
    const response = await request(app)
      .post('/user/signup')
      .send({
        ...fakeUser,
        password: 'pass123'
      });
    expect(response.status).toBe(400);
  });
  it('should not be possible to signup user with a invalid email', async () => {
    const response = await request(app)
      .post('/user/signup')
      .send({
        ...fakeUser,
        email: 'email123'
      });
    expect(response.status).toBe(400);
  });
  it('should not be possible to signup user without userName', async () => {
    const response = await request(app)
      .post('/user/signup')
      .send({
        ...fakeUser,
        userName: null
      });
    expect(response.status).toBe(400);
  });
  it('should not be possible to signup user without email', async () => {
    const response = await request(app)
      .post('/user/signup')
      .send({
        ...fakeUser,
        email: null
      });
    expect(response.status).toBe(400);
  });
  it('should not be possible to signup user without password', async () => {
    const response = await request(app)
      .post('/user/signup')
      .send({
        ...fakeUser,
        password: null
      });
    expect(response.status).toBe(400);
  });
  it('should be possible signup a user', async () => {
    const response = await request(app).post('/user/signup').send(fakeUser);
    const { body } = response;
    expect(response.status).toBe(200);
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('userData');
    expect(body.userData).toHaveProperty('userName');
    expect(body.userData).toHaveProperty('_id');
  });
  it('should not be possible signup a existent user', async () => {
    const response = await request(app).post('/user/signup').send(fakeUser);
    expect(response.status).toBe(409);
  });
  it('should be possible signin a user', async () => {
    const response = await request(app).post('/user/signin').send({
      email,
      password
    });
    const { body } = response;
    expect(response.status).toBe(200);
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('userData');
    expect(body.userData).toHaveProperty('userName');
    expect(body.userData).toHaveProperty('_id');
  });
  it('should not be possible to signin user with a wrong password', async () => {
    const response = await request(app).post('/user/signin').send({
      email,
      password: 'wrongpassword123@'
    });
    expect(response.statusCode).toBe(401);
  });
  it('should not be possible to signin user with a wrong email', async () => {
    const response = await request(app).post('/user/signin').send({
      email: 'wrong@email.com',
      password
    });
    expect(response.statusCode).toBe(401);
  });
});
