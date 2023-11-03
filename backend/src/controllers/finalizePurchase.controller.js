export const finalizePurchase = async (req, res) => {
    const { cid } = req.params;
  
    try {
      const cart = await cartModel.findById(cid);
  
      if (!cart) {
        return res.status(404).send({ respuesta: 'Error en finalizar compra', mensaje: 'Cart Not Found' });
      }
  
      // Verificar el stock de cada producto en el carrito
      const productsToPurchase = cart.products;
  
      for (const productToPurchase of productsToPurchase) {
        const product = await productModel.findById(productToPurchase.id_prod);
  
        if (!product) {
          return res.status(404).send({ respuesta: 'Error en finalizar compra', mensaje: 'Product Not Found' });
        }
  
        // Verificar si hay suficiente stock
        if (product.stock < productToPurchase.quantity) {
          return res.status(400).send({ respuesta: 'Error en finalizar compra', mensaje: 'Insufficient Stock' });
        }
      }
  
      // Restar el stock de los productos y vaciar el carrito
      for (const productToPurchase of productsToPurchase) {
        const product = await productModel.findById(productToPurchase.id_prod);
        product.stock -= productToPurchase.quantity;
        await product.save();
      }
  
      // Vaciar el carrito
      cart.products = [];
      await cart.save();
  
      return res.status(200).send({ respuesta: 'Compra finalizada con éxito', mensaje: 'Purchase Completed' });
    } catch (error) {
      return res.status(500).send({ respuesta: 'Error en finalizar compra', mensaje: error });
    }
  };