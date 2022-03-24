import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const quantityChangeHandler = (type) => {
    if (type === "dec" && props.item.quantityInfo.quantity > props.item.quantityInfo.min) {
      cartContext.decreaseQuantity(props.item.id);
    }

    if (type === "inc" && props.item.quantityInfo.quantity < props.item.quantityInfo.max) {
      cartContext.increaseQuanity(props.item.id);
    }
  };

  const itemRemoveHandler = () => {
    cartContext.removeItem(props.item.id);
  };

  return (
    <li>
      <h4>{props.item.title}</h4>
      <p>{props.item.price + " €"}</p>
      <div>
        <p>{"Quantidade: "}</p>
        <button type="button" onClick={() => quantityChangeHandler("dec")}>-</button>
        <input
          readOnly
          type="number"
          inputMode="numeric"
          value={props.item.quantityInfo.quantity}
          style={{ width: "2rem" }}
        />
        <button type="button" onClick={() => quantityChangeHandler("inc")}>+</button>
      </div>
      <button onClick={itemRemoveHandler}>Remover</button>
    </li>
  );
};

export default CartItem;
