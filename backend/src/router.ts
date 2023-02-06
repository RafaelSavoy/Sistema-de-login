import { Router } from 'express';
import { userRouter } from './modules/user/user.routes';
import { tokenRouter } from './modules/token/token.routes';

const router = Router();

router.use('/user', userRouter);

router.use('/token', tokenRouter);

export { router };
