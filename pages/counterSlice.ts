import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: number; // Adjust types as needed
  name: string;
  price: number;
  quantity: number;
  stock:number;
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
     add: (state, action) => {
      const itemId = action.payload.id; // Extract the item ID to remove

   
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
          // If it exists, increment its quantity
          if(state.cart[index].quantity<state.cart[index].stock){
          state.cart[index].quantity++;
          }
      } 
    },
    decriment: (state, action) => {
      const itemId = action.payload.id; // Extract the item ID to remove

   
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
          // If it exists, increment its quantity
          if(state.cart[index].quantity!=1){
              state.cart[index].quantity--;
          }
      } 
    },

  },
});

export const { addToCart, removeFromCart ,add,decriment} = cart.actions;

export default cart.reducer;