import { Fragment, useContext } from "react";
import { CartContext } from "../../store/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <Fragment>
      <h1>Cart</h1>
      <ul>
        {cartContext.items.map((item) => {
          return (
            <li>
              <h4>{item.title}</h4>
              <p>{item.price + " €"}</p>
              <p>{"Quantidade: " + item.quantity}</p>
            </li>
          );
        })}
      </ul>
      {"Total: " + cartContext.totalAmount + " €"}
    </Fragment>
  );
};

export default Cart;
