import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ProductItemForm from "./ProductItemForm";

import "./ProductItem.css";

const ProductItem = (props) => {
  const cartContext = useContext(CartContext);

  const itemQuantityInfo = {
    min: props.product.quantity.min,
    step: props.product.quantity.step,
    max:
      props.product.quantity.max === null
        ? Number.MAX_SAFE_INTEGER
        : props.product.quantity.max
  };

  const addToCartHandler = (quantity) => {
    cartContext.addItem({
      id: props.product.id,
      title: props.product.title,
      quantityInfo: {
        quantity,
        ...itemQuantityInfo
      },
      price: props.product.price.value
    });
  };

  return (
    <div className="card">
      <div className="card-header-img">
        <img src={props.product.imgUrl} alt="" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3>{props.product.title}</h3>
          <p>({props.product.title_extra})</p>
        </div>
        <div>
          <p>
            {props.product.price.value}€ / {props.product.price.measure}
          </p>
          <ProductItemForm
            quantityInfo={itemQuantityInfo}
            onAddToCart={addToCartHandler}
          />
        </div>
      </div>
      <div className="card-footer">
        <button>Adicionar</button>
      </div>
    </div>
  );
};

export default ProductItem;
