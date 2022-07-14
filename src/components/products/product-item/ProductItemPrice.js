const ProductItemPrice = (props) => {
  return (
    <div>
      {props.value}€ / {props.measure}
    </div>
  );
};

export default ProductItemPrice;