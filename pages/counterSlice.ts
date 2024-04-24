import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: number; // Adjust types as needed
  name: string;
  price: number;
  quantity: number;
  // ...other properties
}

const initialState: { cart: CartItem[] } = {
  cart: [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      var { item } = action.payload;
      console.log(action.payload)
      var existingItemIndex=null;
      if(state.cart.length>0){

        existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id == action.payload.id
      );
   
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
       
        state.cart.push({...action.payload, quantity: 1 });
      } }
else{
  state.cart.push({...action.payload, quantity: 1 });
}

    },
    removeFromCart: (state, action) => {
      
      const itemId = action.payload.id; // Extract the item ID to remove

      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;

export default cart.reducer;