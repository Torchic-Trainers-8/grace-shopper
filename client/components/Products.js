import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState("product");
  const dispatch = useDispatch();
  if (!products.length) {
    return <div>Hellooo</div>;
  } else {
    return (
      <div>
        <div>This is going to be if we have data</div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>Product</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default Products;
