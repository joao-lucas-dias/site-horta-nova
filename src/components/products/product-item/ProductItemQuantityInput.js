import { useState } from "react";

const ProductItemQuantityInput = (props) => {
  const [currentQuantity, setCurrentQuantity] = useState(props.quantityInfo.min);

  const quantityChangeHandler = (type) => {
    if (type === "dec" && currentQuantity > props.quantityInfo.min) {
      setCurrentQuantity((oldValue) => {
        return oldValue - props.quantityInfo.step;
      });
    }

    if (type === "inc" && currentQuantity < props.quantityInfo.max) {
      setCurrentQuantity((oldValue) => {
        return oldValue + props.quantityInfo.step;
      });
    }
  };

  const addProductHandler = (event) => {
    event.preventDefault();

    props.onAddToCart(currentQuantity);

    setCurrentQuantity(props.quantityInfo.min);
  };

  return (
    <div>
      <button type="button" onClick={() => quantityChangeHandler("dec")}>
        -
      </button>
      <input
        readOnly
        type="number"
        inputMode="numeric"
        value={currentQuantity}
        min={props.quantityInfo.min}
        step={props.quantityInfo.step}
        style={{ width: "2rem" }}
        max={props.quantityInfo.max}
      />
      <button type="button" onClick={() => quantityChangeHandler("inc")}>
        +
      </button>
    </div>
  );
};

export default ProductItemQuantityInput;
