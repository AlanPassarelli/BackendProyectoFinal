import { useEffect, useState } from "react";
import ProductCard from "./Products/ProductCard";
import { Col, Row } from "react-bootstrap";

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((response) => response.json())
      .then((data) => setProductos(data.docs))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <Row>
        {productos.map((producto) => (
          <ProductCard key={producto._id} {...producto} />
        ))}
      </Row>
      
    </div>
  );
};

export default Products;

