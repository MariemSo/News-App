import Router from 'express';

import userRoutes from './modules/User/routes.js';
import newsRoutes from './modules/News/routes.js';

import commentsRoutes from './modules/Comment/routes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/news', newsRoutes);
router.use('/comments', commentsRoutes);

export default router;
