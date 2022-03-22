import { Fragment } from "react";
import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  return (
    <Fragment>
      <h2>Produtos</h2>
      <ul>
        {props.products.map((product) => {
          return <ProductItem product={product} />;
        })}
      </ul>
    </Fragment>
  );
};

export default ProductsList;
