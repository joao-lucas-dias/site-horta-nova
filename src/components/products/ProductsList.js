import { Fragment } from "react";
import ProductItem from "./ProductItem/ProductItem";

const ProductsList = (props) => {
  return (
    <Fragment>
      <h2>Produtos</h2>
      <section>
        <ul style={{ listStyleType: "none" }}>
          {props.products.map((productInfo) => {
            return <ProductItem product={productInfo} />;
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default ProductsList;
