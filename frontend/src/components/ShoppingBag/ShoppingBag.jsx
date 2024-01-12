import React from "react";
import "./ShoppingBag.scss";
import { useCart } from "../context/cartContext";

const ShoppingBag = () => {
  const { state: { cart }, dispatch } = useCart();

  const handleEmptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  return (
    <div>
      <h2>Tienda</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product._id}>
                {product.title} - Precio: ${product.price}
              </li>
            ))}
          </ul>
          <button onClick={handleEmptyCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default ShoppingBag;

// import React, { useEffect, useState } from "react";
// import "./ShoppingBag.scss";
// import { useCart } from "../context/cartContext";

// const ShoppingBag = () => {
//   const { state: { cart } } = useCart();
//   const [carrito, setCarrito] = useState([]);

//   useEffect(() => {
//     // Hacer una solicitud para obtener el carrito desde la API
//     fetch("http://localhost:8081/api/carts/")
//       .then((response) => response.json())
//       .then((data) => {
//         // Actualizar el estado del carrito con los datos recibidos
//         setCarrito(data.products || []);
//       })
//       .catch((error) => {
//         console.log("Fetch error:", error);
//       });
//   }, [cart]); // Asegúrate de actualizar el carrito cuando cambie

//   return (
//     <div>
//       <h2>Shopping Bag</h2>
//       {carrito.length === 0 ? (
//         <p>No hay productos en el carrito</p>
//       ) : (
//         <ul>
//           {carrito.map((product) => (
//             <li key={product._id}>
//               {product.title} - Precio: ${product.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ShoppingBag;