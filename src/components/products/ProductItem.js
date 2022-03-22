const ProductItem = (props) => {
  return (
    <li key={props.product.title}>
      <span>
        <h2>{props.product.title}</h2>
        <p>({props.product.title_extra})</p>
      </span>
      <p>Origem: {props.product.info.origin}</p>
      <p>{props.product.info.info_extra}</p>
      <p>
        {props.product.price.value}€ / {props.product.price.measure}
      </p>
    </li>
  );
};

export default ProductItem;
