const ProductItemQuantityInput = (props) => {
  return (
    <div>
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
  );
};

export default ProductItemQuantityInput;
