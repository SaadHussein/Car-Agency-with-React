import React, { useEffect, useReducer, useState } from "react";

export const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  navigationState: false,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  getItemAmount: (id) => {},
  toggleNavigation: (state) => {},
  removeAll: () => {},
  removeAllItemsAmount: (id) => {},
});
const defaultCartState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : {
      cartItems: [],
      totalAmount: 0,
    };

const firstState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.amount;

    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }

    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        cartItems: updatedItems,
        totalAmount: updatedTotalAmount,
      })
    );

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - 1;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.cartItems.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        cartItems: updatedItems,
        totalAmount: updatedTotalAmount,
      })
    );

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVEALL") {
    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        cartItems: [],
        totalAmount: 0,
      })
    );
    return firstState;
  }

  if (action.type === "REMOVEALLITEMAMOUNT") {
    let updatedItems;
    updatedItems = state.cartItems.filter((item) => item.id !== action.id);

    console.log(updatedItems);
    console.log(state.cartItems);

    let ourItemIndex;
    ourItemIndex = state.cartItems.findIndex((item) => item.id === action.id);
    console.log(ourItemIndex);

    let ourItem = state.cartItems[ourItemIndex];

    console.log(ourItem.amount);

    let updatedAmount = state.totalAmount - ourItem.amount;
    console.log(updatedAmount);

    // const { amount } = state.cartItems.filter((item) => item.id === action.id);
    // console.log(amount);

    // const updatedAmount = state.totalAmount - amount;
    // console.log(updatedAmount);

    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        cartItems: updatedItems,
        totalAmount: updatedAmount,
      })
    );

    return {
      cartItems: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [navState, setNavState] = useState(false);
  const [cartItems, dispatchCartActions] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartActions({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartActions({ type: "REMOVE", id: id });
  };

  const getItemAmount = (id) =>
    cartItems.cartItems.find((item) => item.id === id)?.amount || 0;

  const toggleNavigation = () => {
    setNavState(!navState);
  };

  const removeAllItems = () => {
    dispatchCartActions({ type: "REMOVEALL" });
  };

  const removeAllItemsAmount = (id) => {
    dispatchCartActions({ type: "REMOVEALLITEMAMOUNT", id: id });
  };

  const cartContext = {
    items: cartItems.cartItems,
    allAmount: cartItems.totalAmount,
    navigationState: navState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    getItemAmount: getItemAmount,
    toggleNavigation: toggleNavigation,
    removeAllItems: removeAllItems,
    removeAllItemsAmount: removeAllItemsAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
