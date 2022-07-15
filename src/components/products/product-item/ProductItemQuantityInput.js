const ProductItemQuantityInput = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Quantidade
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button type="button" onClick={() => props.onQuantityChange("dec")}>
          -
        </button>
        <input
          readOnly
          type="number"
          inputMode="numeric"
          value={props.currentQuantity}
          min={props.quantityInfo.min}
          step={props.quantityInfo.step}
          style={{ width: "2rem" }}
          max={props.quantityInfo.max}
        />
        <button type="button" onClick={() => props.onQuantityChange("inc")}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductItemQuantityInput;
