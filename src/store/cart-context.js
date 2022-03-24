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
  increaseQuanity: (id) => {},
  decreaseQuantity: (id) => {},
  clearCart: () => {}
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems = [...state.items];
    updatedItems.push(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantityInfo.quantity;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    const itemToRemove = state.items[itemIndex];

    const updatedTotalAmount =
      state.totalAmount - itemToRemove.price * itemToRemove.quantityInfo.quantity;

    const updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "INCREASE_QUANTITY") {
  }
  if (action.type === "DECREASE_QUANTITY") {
    
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

  const increaseQuantityHandler = (itemId) => {
    cartActionDispatcher({ type: "INCREASE_QUANTITY", id: itemId });
  };

  const decreaseQuantityHandler = (itemId) => {
    cartActionDispatcher({ type: "DECREASE_QUANTITY", id: itemId });
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
        increaseQuanity: increaseQuantityHandler,
        decreaseQuantity: decreaseQuantityHandler,
        clearCart: clearCartHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
