import { cartModel } from "../dao/models/carts.model.js";


export const getCart = async (req, res) => {

    try {
        const cart = await cartModel.create({})
        res.status(200).send({ respuesta: 'OK', mensaje: cart })
    } catch (error) {
        res.status(400).send({ respuesta: 'Error en crear Carrito', mensaje: error })
    }
  }
  
  export const postCart = async (req, res) => {
    const { cid, pid } = req.params
    const { quantity } = req.body
  
    try {
        const cart = await cartModel.findById(cid)
        if (cart) {
            const prod = await productModel.findById(pid) //Busco si existe en LA BDD, no en el carrito
  
            if (prod) {
                const indice = cart.products.findIndex(item => item.id_prod == pid) //Busco si existe en el carrito
                if (indice != -1) {
                    cart.products[indice].quantity = quantity //Si existe en el carrito modifico la cantidad
                } else {
                    cart.products.push({ id_prod: pid, quantity: quantity }) //Si no existe, lo agrego al carrito
                }
                const respuesta = await cartModel.findByIdAndUpdate(cid, cart) //Actualizar el carrito
                res.status(200).send({ respuesta: 'OK', mensaje: respuesta })
            } else {
                res.status(404).send({ respuesta: 'Error en agregar producto Carrito', mensaje: 'Produt Not Found' })
            }
        } else {
            res.status(404).send({ respuesta: 'Error en agregar producto Carrito', mensaje: 'Cart Not Found' })
        }
  
    } catch (error) {
        console.log(error)
        res.status(400).send({ respuesta: 'Error en agregar producto Carrito', mensaje: error })
    }
  }
  