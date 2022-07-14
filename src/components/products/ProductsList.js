import { Fragment } from "react";
import ProductItem from "./product-item/ProductItem";

import "./ProductsList.css";

const ProductsList = (props) => {
  return (
    <Fragment>
      <h2>Produtos</h2>
      <div className="products-container">
        {props.products.map((productInfo) => {
          return <ProductItem product={productInfo} />;
        })}
      </div>
    </Fragment>
  );
};

export default ProductsList;
