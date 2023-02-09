import { app } from '../../app';
import request from 'supertest';
import { TestDatabase } from '../../util/testdatabase.util';
import { tokenServices } from '../../services/token';
import { SECRET } from '../../util/server.utils';
import jwt from 'jsonwebtoken';

describe('Token route', () => {
  const testDatabase = new TestDatabase();
  const fakeUser = testDatabase.getTestUser();
  const { lastName, firstName } = fakeUser;
  const token = tokenServices.createToken({
    firstName,
    lastName,
    _id: '123123123'
  });
  const expiredToken = jwt.sign({ _id: '13123123123', firstName, lastName }, SECRET, {
    expiresIn: '0s'
  });
  beforeAll(() => {
    testDatabase.connectTestDatabase();
  });
  afterAll(() => {
    testDatabase.closeDatabase();
  });
  it('should be return bad request on request without token', async () => {
    const response = await request(app).post('/token/validate');
    expect(response.status).toBe(400);
  });
  it('should be return token payload', async () => {
    const response = await request(app)
      .post('/token/validate')
      .set('authorization', `Bearer ${token}`);
    const payload = response.body;
    expect(payload).toHaveProperty('_id');
    expect(payload).toHaveProperty('firstName');
    expect(payload).toHaveProperty('lastName');
    expect(payload).toHaveProperty('iat');
    expect(payload).toHaveProperty('exp');
  });
  it('should be return error invalid token', async () => {
    const response = await request(app)
      .post('/token/validate')
      .set('authorization', `Bearer awokdpaokwdpamsdpoakwpdmapwd`);
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Token inválido');
  });
  it('should be return error expired token', async () => {
    const response = await request(app)
      .post('/token/validate')
      .set('authorization', `Bearer ${expiredToken}`);
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Token expirado');
  });
});
