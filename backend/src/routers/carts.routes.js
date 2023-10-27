import { Router } from 'express';
import { getCart, postCart } from '../controllers/carts.controller.js';
const routerC = Router()


routerC.get('/:id', getCart)
routerC.post('/:cid/products/:pid', postCart)


export default routerC