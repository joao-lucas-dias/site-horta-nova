import { Fragment } from "react";
import ProductItem from "./product-item/ProductItem";

import "./ProductsList.css";

const ProductsList = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "70vw" }}>
      <h2>Produtos</h2>
      <div className="products-container">
        {props.products.map((productInfo) => {
          return <ProductItem product={productInfo} />;
        })}
      </div>
    </div>
  );
};

export default ProductsList;
