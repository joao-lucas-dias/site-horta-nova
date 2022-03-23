import { useState } from "react";

const ProductItemForm = (props) => {
  const [currentQuantity, setCurrentQuantity] = useState(props.quantityInfo.min);
  const newMax =
    props.quantityInfo.max === null ? Number.MAX_SAFE_INTEGER : props.quantityInfo.max;

  const quantityChangeHandler = (type) => {
    if (type === "dec" && currentQuantity > props.quantityInfo.min) {
      setCurrentQuantity((oldValue) => {
        return oldValue - props.quantityInfo.step;
      });
    }

    if (type === "inc" && currentQuantity < newMax) {
      setCurrentQuantity((oldValue) => {
        return oldValue + props.quantityInfo.step;
      });
    }
  };

  const addProductHandler = (event) => {
    event.preventDefault();

    console.log("add: " + currentQuantity);

    setCurrentQuantity(props.quantityInfo.min);
  };

  return (
    <form onSubmit={addProductHandler}>
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
          max={newMax}
        />
        <button type="button" onClick={() => quantityChangeHandler("inc")}>
          +
        </button>
      </div>
      <button>Adicionar</button>
    </form>
  );
};

export default ProductItemForm;
