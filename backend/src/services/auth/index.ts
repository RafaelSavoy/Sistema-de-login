import { signup } from './signup.service';
import { signin } from './signin.service';
import { comparePassword } from './comparePassword.service';
import { hashPassword } from './hashPassword.service';

export const services = {
  signup,
  signin,
  comparePassword,
  hashPassword,
};
