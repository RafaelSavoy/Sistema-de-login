import mongoose from 'mongoose';
import { UserModel } from '../../models/User';
import { TESTURI } from '../../util/server.utils';
import { databaseServices } from './user';

interface TestUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class TestDatabase {
  testUser: TestUser;
  constructor() {
    this.testUser = {
      firstName: 'Teste',
      lastName: 'Teste',
      email: 'teste@teste.com',
      password: 'Teste123@'
    };
  }
  getTestUser() {
    return this.testUser;
  }
  async setUserId(id?: string) {
    if (id) {
      this.testUser.id = id;
    } else {
      const user = await databaseServices.getUser(this.testUser.email);
      this.testUser.id = user?.id;
    }
  }
  connectTestDatabase() {
    mongoose.connect(TESTURI);
  }
  closeDatabase() {
    UserModel.deleteMany({});
    mongoose.disconnect();
  }
}
