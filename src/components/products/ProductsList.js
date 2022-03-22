import { Fragment } from "react";
import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  return (
    <Fragment>
      <h2>Produtos</h2>
      <ul>
        {props.products.items.map((productInfo) => {
          return <ProductItem product={productInfo} />;
        })}
      </ul>
    </Fragment>
  );
};

export default ProductsList;
