import { Router } from 'express';
import { getProducts, getProductsById, postProduct, putProductsById, deleteProductById } from "../controllers/products.controller.js";
import { passportError, authorization } from "../utils/messagesError.js";

const routerP = Router()

routerP.get('/', getProducts)
routerP.get('/:id', getProductsById)
routerP.post('/', passportError('jwt'), authorization('Admin'), postProduct)
routerP.put('/:id', passportError('jwt'), authorization('Admin'), putProductsById)
routerP.delete('/:id', passportError('jwt'), authorization('Admin'), deleteProductById)

export default routerP