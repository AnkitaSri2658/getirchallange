import { createSlice } from "@reduxjs/toolkit";

const initialItem = [{
  id: 1485723766805,
  price: 10.99,
  name: "Handcrafted Trees Mug",
  quantity: 1,
  totalPrice: 10.99,
}];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: initialItem, //[] adding one item by default just for demo one can remove it
    totalQuantity: 1, //0
    changed: false,
    totalAmount: 10.99, //0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      state.totalAmount = state.totalAmount + newItem.price;

      if (!existingItem) {
      
        state.items = [...state.items,{
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        }]
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalAmount = parseInt(state.totalAmount - existingItem.price);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
