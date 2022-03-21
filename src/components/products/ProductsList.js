import { Fragment } from "react";

const ProductsList = (props) => {
  return (
    <Fragment>
      <h2>Produtos</h2>
      <ul>
        {props.products.map((product) => {
          return <li>{product}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default ProductsList;
