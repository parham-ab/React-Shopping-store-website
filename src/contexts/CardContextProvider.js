import React, { useEffect, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};
// count function
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};
// Reducer
const cardReducer = (state, action) => {
  switch (action.type) {
    // adding a product for first time
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumItems(state.selectedItems),
        })
      );

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...sumItems(state.selectedItems),
      };
    // remove products (When user selects more than one product and wants to remove a number of them)
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          selectedItems: [...newSelectedItems],
          ...sumItems(newSelectedItems),
          checkout: false,
        })
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
        checkout: false,
      };
    // add products (when user want to add more than one product)
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          ...sumItems(state.selectedItems),
        })
      );
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    // remove products (When user selects more than one product and wants to remove a number of them)
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;

      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          ...sumItems(state.selectedItems),
        })
      );
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "CHECKOUT":
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkout: true,
        })
      );
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkout: false,
        })
      );
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
// context
export const CardContext = React.createContext();

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  // save to localeStorage function
  const saveToLocale = () => {
    const savedItems = localStorage.getItem("shopStore-productslist");
    const parsedItems = JSON.parse(savedItems);
    if (savedItems != null) {
      initialState.selectedItems = parsedItems.selectedItems;
      initialState.itemsCounter = parsedItems.itemsCounter;
      initialState.total = parsedItems.total;
      initialState.checkOut = parsedItems.checkOut;
    }
  };
  useEffect(() => {
    saveToLocale();
  }, []);

  const savedItems = localStorage.getItem("shopStore-productslist");
  const parsedItems = JSON.parse(savedItems);
  if (savedItems != null) {
    initialState.selectedItems = parsedItems.selectedItems;
    initialState.itemsCounter = parsedItems.itemsCounter;
    initialState.total = parsedItems.total;
    initialState.checkOut = parsedItems.checkOut;
  }
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
