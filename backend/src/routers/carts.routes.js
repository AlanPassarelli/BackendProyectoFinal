import { Router } from 'express';
import { getCart, postCart } from '../controllers/carts.controller.js';
import { finalizePurchase } from '../controllers/finalizePurchase.controller.js';
const routerC = Router()


routerC.get('/:id', getCart)
routerC.post('/:cid/products/:pid', postCart)
routerC.post('/:cid/purchase', finalizePurchase);


export default routerC