import mongoose, { Schema } from 'mongoose';
import { passwordServices } from '../services/password';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  firstName: {
    type: 'String',
    required: 'Insira o primeiro nome do usuário'
  },
  lastName: {
    type: 'String',
    required: 'Insira o ultimo nome do usuário'
  },
  email: {
    type: 'String',
    required: 'Insira o email do usuário'
  },
  password: {
    type: 'String',
    required: 'Insira a senha do usuário'
  }
});

UserSchema.pre('save', async function (next) {
  const password = this.password;
  if (password) {
    this.password = await passwordServices.hashPassword(password);
    next();
  }
});

const UserModel = mongoose.model('User', UserSchema);

export { UserModel };
