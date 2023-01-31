import { Router } from 'express';
import { validateTokenMiddleware } from './controller/validateTokenMiddleware.controller';

const tokenRouter = Router();

tokenRouter.post('/validate', validateTokenMiddleware);

export { tokenRouter };
