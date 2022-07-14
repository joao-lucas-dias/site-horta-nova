import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import ProductItemQuantityInput from "./ProductItemQuantityInput";

import "./ProductItem.css";
import ProductItemPrice from "./ProductItemPrice";

const ProductItem = (props) => {
  const cartContext = useContext(CartContext);
  const [currentQuantity, setCurrentQuantity] = useState(props.product.quantity.min);

  const itemQuantityInfo = {
    min: props.product.quantity.min,
    step: props.product.quantity.step,
    max:
      props.product.quantity.max === null
        ? Number.MAX_SAFE_INTEGER
        : props.product.quantity.max
  };

  const quantityChangeHandler = (type) => {
    if (type === "dec" && currentQuantity > props.product.quantity.min) {
      setCurrentQuantity((oldValue) => {
        return oldValue - props.product.quantity.step;
      });
    }

    if (type === "inc" && currentQuantity < itemQuantityInfo.max) {
      setCurrentQuantity((oldValue) => {
        return oldValue + props.product.quantity.step;
      });
    }
  };

  const addToCartHandler = () => {
    cartContext.addItem({
      id: props.product.id,
      title: props.product.title,
      quantityInfo: {
        quantity: currentQuantity,
        ...itemQuantityInfo
      },
      price: props.product.price.value
    });

    setCurrentQuantity(props.product.quantity.min);
  };

  return (
    <div className="card">
      <div className="card-header-img">
        <img src={props.product.imgUrl} alt="" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <div className="card-title name">{props.product.title}</div>
          <div className="card-title info">({props.product.title_extra})</div>
        </div>
        <div className="card-input-box">
          <ProductItemPrice
            value={props.product.price.value}
            measure={props.product.price.measure}
          />
          <ProductItemQuantityInput
            quantityInfo={itemQuantityInfo}
            currentQuantity={currentQuantity}
            onQuantityChange={quantityChangeHandler}
          />
        </div>
      </div>
      <div className="card-footer">
        <button onClick={addToCartHandler}>Adicionar</button>
      </div>
    </div>
  );
};

export default ProductItem;
