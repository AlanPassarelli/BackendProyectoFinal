import { Router } from 'express';
import { getProducts, getProductsById, postProduct, putProductsById, deleteProductById } from "../controllers/products.controller.js";
import { passportError, authorization } from "../utils/messagesError.js";

const routerP = Router()

routerP.get('/', getProducts)
routerP.get('/:id', getProductsById)
routerP.post('/', passportError('jwt'), authorization('admin'), postProduct)
routerP.put('/:id', passportError('jwt'), authorization('admin'), putProductsById)
routerP.delete('/:id', passportError('jwt'), authorization('admin'), deleteProductById)

export default routerP