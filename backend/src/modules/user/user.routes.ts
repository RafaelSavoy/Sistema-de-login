import { Router } from 'express';
import { signin, signup } from './controllers';
import { signinValidator } from './validators/signin';
import { signupValidator } from './validators/signup';

const userRouter = Router();

userRouter.post('/signup', signupValidator, signup);

userRouter.post('/signin', signinValidator, signin);

export { userRouter };
