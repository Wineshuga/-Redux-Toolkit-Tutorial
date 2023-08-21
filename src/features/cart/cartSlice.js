import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => ({
      ...state,
      cartItems: []
    }),
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload)
      cartItem.amount += 1
    },
    decreaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload)
      if (cartItem.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== payload)
      } else {
        cartItem.amount -= 1
      }
    }
  }
})

export const {clearCart, removeItem, decreaseItem, increaseItem} = cartSlice.actions
export default cartSlice.reducer