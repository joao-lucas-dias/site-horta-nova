import { createContext, useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems = [...state.items];
    updatedItems.push(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "REMOVE_ITEM") {
  }
  if (action.type === "CLEAR") {
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, cartActionDispatcher] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (newItem) => {
    cartActionDispatcher({ type: "ADD_ITEM", item: newItem });
  };

  const removeItemHandler = (itemId) => {
    cartActionDispatcher({ type: "REMOVE_ITEM", id: itemId });
  };

  const clearCartHandler = () => {
    cartActionDispatcher({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
