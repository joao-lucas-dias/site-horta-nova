import { Fragment, useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <Fragment>
      <h1>Cart</h1>
      <ul>
        {cartContext.items.map((item) => {
          return <CartItem item={item} />;
        })}
      </ul>
      {"Total: " + cartContext.totalAmount + " €"}
    </Fragment>
  );
};

export default Cart;
