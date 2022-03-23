import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
  const quantity = {
    min: props.product.quantity.min,
    step: props.product.quantity.step,
    max: props.product.quantity.max
  }

  return (
    <li key={props.product.title}>
      <div>
        <h3>{props.product.title}</h3>
        <p>({props.product.title_extra})</p>
      </div>
      <div></div>
      <div>
        <p>Origem: {props.product.info.origin}</p>
        <p>{props.product.info.info_extra}</p>
        <p>
          {props.product.price.value}€ / {props.product.price.measure}
        </p>
      </div>
      <ProductItemForm quantityInfo={quantity} />
    </li>
  );
};

export default ProductItem;
