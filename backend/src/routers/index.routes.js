import { Router } from 'express';
import routerP from'./products.routes.js'
import routerC from './carts.routes.js';
import sessionRouter from './session.routes.js';
import userRouter from './users.routes.js';

const router = Router ()

router.use ('/api/users', userRouter)
router.use('/api/products', routerP)
router.use('/api/carts', routerC)
router.use('/api/sessions', sessionRouter)


export default router