import { createContext, useReducer } from "react";

const defaultCartState = {
  cartVisibility: false,
  items: [],
  totalAmount: 0
};

export const CartContext = createContext({
  cartVisibility: false,
  items: [],
  totalAmount: 0,
  toggleCart: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQuanity: (id) => {},
  decreaseQuantity: (id) => {},
  clearCart: () => {}
});

const cartReducer = (state, action) => {
  if (action.type === "TOGGLE") {
    return {
      ...state,
      cartVisibility: !state.cartVisibility
    };
  }
  if (action.type === "ADD_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.item.id);

    let updatedItems = [...state.items];

    if (itemIndex === -1) {
      updatedItems.push(action.item);
    } else {
      const itemToUpdate = state.items[itemIndex];

      const itemQuantityInfo = itemToUpdate.quantityInfo;

      const updatedItem = {
        ...itemToUpdate,
        quantityInfo: {
          ...itemQuantityInfo,
          quantity: itemQuantityInfo.quantity + action.item.quantityInfo.quantity
        }
      };

      updatedItems[itemIndex] = updatedItem;
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantityInfo.quantity;

    return {
      ...state,
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
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "INCREASE_QUANTITY") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    const itemToUpdate = state.items[itemIndex];

    const itemQuantityInfo = itemToUpdate.quantityInfo;

    const updatedItem = {
      ...itemToUpdate,
      quantityInfo: {
        ...itemQuantityInfo,
        quantity: itemQuantityInfo.quantity + itemQuantityInfo.step
      }
    };

    const updatedTotalAmount = state.totalAmount + itemToUpdate.price;

    const updatedItems = [...state.items];
    updatedItems[itemIndex] = updatedItem;

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "DECREASE_QUANTITY") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    const itemToUpdate = state.items[itemIndex];

    const itemQuantityInfo = itemToUpdate.quantityInfo;

    const updatedItem = {
      ...itemToUpdate,
      quantityInfo: {
        ...itemQuantityInfo,
        quantity: itemQuantityInfo.quantity - itemQuantityInfo.step
      }
    };

    const updatedTotalAmount = state.totalAmount - itemToUpdate.price;

    const updatedItems = [...state.items];
    updatedItems[itemIndex] = updatedItem;

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      items: [],
      totalAmount: 0
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, cartActionDispatcher] = useReducer(cartReducer, defaultCartState);

  const toggleCartHandler = () => {
    cartActionDispatcher({ type: "TOGGLE" });
  };

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
        cartVisibility: cartState.cartVisibility,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        toggleCart: toggleCartHandler,
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
