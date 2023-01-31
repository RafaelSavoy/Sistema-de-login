import mongoose, { Schema } from 'mongoose';
import { hashPassword } from '../../services/auth/hashPassword.service';

const UserSchema = new Schema({
  firstName: {
    type: 'String',
    required: 'Insira o primeiro nome do usuário',
  },
  lastName: {
    type: 'String',
    required: 'Insira o ultimo nome do usuário',
  },
  email: {
    type: 'String',
    required: 'Insira o email do usuário',
  },
  password: {
    type: 'String',
    required: 'Insira a senha do usuário',
  },
});

UserSchema.pre('save', function (next) {
  const password = this.password;
  if (password) {
    this.password = hashPassword(password);
    next();
  }
});

const UserModel = mongoose.model('User', UserSchema);

export { UserModel };
