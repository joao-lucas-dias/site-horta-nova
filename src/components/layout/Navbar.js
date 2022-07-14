import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../cart/Cart";

const Navbar = () => {
  const cartContext = useContext(CartContext);

  const toggleCartHandler = () => {
    cartContext.toggleCart();
  };

  return (
    <div className="navbar">
      Navbar
      <h1>Personalize o seu Cabaz</h1>
      <div>
        <button onClick={toggleCartHandler}>O meu Cabaz</button>
        {cartContext.items.length}
      </div>
      {cartContext.cartVisibility && <Cart onBackdropClick={toggleCartHandler} />}
    </div>
  );
};

export default Navbar;
