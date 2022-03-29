import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const clearCartHandler = () => {
    cartContext.clearCart();
  };

  return (
    <Modal onBackdropClick={props.onBackdropClick}>
      <h1>Cart</h1>
      <div>
        <ul>
          {cartContext.items.map((item) => {
            return <CartItem item={item} />;
          })}
        </ul>
        {"Total: " + cartContext.totalAmount + " €"}
      </div>
      {cartContext.items.length > 0 && <button onClick={clearCartHandler}>Limpar</button>}
      <button onClick={cartContext.toggleCart}>Fechar</button>
    </Modal>
  );
};

export default Cart;
