const ProductItem = (props) => {
  return <li key={props.product}>{props.product}</li>;
};

export default ProductItem;
