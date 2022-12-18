import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    
    const existingCarItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
      );
      
      const existingCarItem = state.items[existingCarItemIndex];
      let updatedItems;
      
      if(existingCarItem){
        const updatedItem = {
          ...existingCarItem,
          amount: existingCarItem.amount + action.item.amount
        }
        
        updatedItems = [...state.items];
        updatedItems[existingCarItemIndex] = updatedItem
      } else{
        updatedItems = state.items.concat(action.item);
    }

    const updatedCartAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedCartAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
