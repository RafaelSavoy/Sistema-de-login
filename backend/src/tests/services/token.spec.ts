import { tokenServices } from '../../services/token';
import { validateToken } from '../../services/token/validateToken.service';
import { TestDatabase } from '../../util/testdatabase.util';

describe('testing token service', () => {
  const user = new TestDatabase().getTestUser();
  const { userName } = user;
  let token: string;
  it('should be create a token', () => {
    const createdToken = tokenServices.createToken({
      userName,
      _id: '123123123123'
    });
    expect(typeof createdToken).toBe('string');
    token = createdToken;
  });
  it('should be possible validate token', async () => {
    const payload = await validateToken(token);
    expect(payload).toHaveProperty('_id')
    expect(payload).toHaveProperty('userName')
    expect(payload).toHaveProperty('iat')
    expect(payload).toHaveProperty('exp')
  });
});
