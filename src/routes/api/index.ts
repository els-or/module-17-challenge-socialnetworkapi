import { Router } from 'express';
import { usersRouter } from './usersRoutes';
import { thoughtsRouter } from './thoughtsRoutes';

const router = Router();


router.use('/users', usersRouter);
router.use('/thoughts', thoughtsRouter);

export default router;
