import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    selectedProducts: [],
  },
  reducers: {
    replaceCart(state, action) {
      state.products = action.payload.products;
      state.selectedProducts = action.payload.products;
    },
    showItemType(state, action) {
      const itemType = action.payload;
      state.selectedProducts = state.products.filter(
        (item) => item.itemType === itemType
      );
    },
    sortFilter(state, action) {
      const sortType = action.payload;
      switch (sortType) {
        case "Price low to high": {
          const newState = state.products.sort((a, b) => a.price - b.price);
          state.selectedProducts = newState;
          return;
        }
        case "Price high to low": {
          const newState = state.products.sort((a, b) => b.price - a.price);
          state.selectedProducts = newState;
          return;
        }
        case "New to old": {
          const newState = state.products.sort((a, b) => b.added - a.added);
          state.selectedProducts = newState;
          return;
        }
        case "Old to new": {
          const newState = state.products.sort((a, b) => a.added - b.added);
          state.selectedProducts = newState;
          return;
        }
        default:
          return state;
      }
    },
    brandFilter(state, action) {
      const brands = action.payload;
      if (brands.length === 0) {
        state.selectedProducts = state.products;
        return;
      }
      let selectedProducts = [];
      for (let i = 0; i < brands.length; i++) {
        selectedProducts = selectedProducts.concat(
          state.products.filter((item) => item.manufacturer === brands[i])
        );
      }
      state.selectedProducts = selectedProducts;
    },
    tagFilter(state, action) {
      const tags = action.payload;
      if (tags.length === 0) {
        state.selectedProducts = state.products;
        return;
      }
      let selectedProducts = [];
      for (let i = 0; i < tags.length; i++) {
        selectedProducts = selectedProducts.concat(
          state.products.filter((item) => item.tags.includes(tags[i]))
        );
      }
      state.selectedProducts = selectedProducts;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
