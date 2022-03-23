import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
  const cartContext = useContext(CartContext);

  const itemQuantityInfo = {
    min: props.product.quantity.min,
    step: props.product.quantity.step,
    max: props.product.quantity.max
  };

  const addToCartHandler = (quantity) => {
    cartContext.addItem({
      id: props.product.title + new Date().getTime().toString(),
      title: props.product.title,
      quantity: quantity,
      price: props.product.price.value
    });
  };

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
      <ProductItemForm quantityInfo={itemQuantityInfo} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default ProductItem;
