import mongoose from 'mongoose';
import { UserModel } from '../models/User';
import { TESTURI } from './server.utils';

interface TestUser {
  _id?: string;
  userName: string;
  email: string;
  password: string;
}

export class TestDatabase {
  testUser: TestUser;
  testDbConnection: mongoose.Connection | undefined;
  constructor() {
    this.testUser = {
      userName: 'RafaelSavoy',
      email: 'teste@gmail.com',
      password: 'Teste123@'
    };
  }
  getTestUser(): TestUser {
    return this.testUser;
  }
  setUserId(id: string | undefined): void {
    this.testUser._id = id;
  }
  async connectTestDatabase() {
    try {
      mongoose.connect(TESTURI);
      console.log('Test database connected');
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async closeDatabase() {
    UserModel.db.dropDatabase();
  }
}
