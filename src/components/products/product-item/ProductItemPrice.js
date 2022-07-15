const ProductItemPrice = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <b>{props.value}€</b>
      <p style={{ margin: "0" }}>/ {props.measure}</p>
    </div>
  );
};

export default ProductItemPrice;