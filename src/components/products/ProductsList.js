import { Fragment } from "react";
import ProductItem from "./product-item/ProductItem";

const ProductsList = (props) => {
  return (
    <Fragment>
      <h2>Produtos</h2>
      <section>
        <ul style={{ listStyleType: "none", display: "grid", gridTemplateColumns: "auto auto auto auto", gap: "10px"}}>
          {props.products.map((productInfo) => {
            return <ProductItem product={productInfo} />;
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default ProductsList;
