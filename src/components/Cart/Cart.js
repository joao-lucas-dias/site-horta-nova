import { Fragment, useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const clearCartHandler = () => {
    cartContext.clearCart();
  }

  return (
    <Fragment>
      <h1>Cart</h1>
      <ul>
        {cartContext.items.map((item) => {
          return <CartItem item={item} />;
        })}
      </ul>
      {"Total: " + cartContext.totalAmount + " €"}
      {cartContext.items.length > 0 && <button onClick={clearCartHandler}>Limpar</button>}
    </Fragment>
  );
};

export default Cart;
