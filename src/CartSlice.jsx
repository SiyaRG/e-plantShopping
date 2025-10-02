import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find((i) => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if item already exists
        } else {
            state.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
        }
    },
    removeItem: (state, action) => {
        const item = action.payload;
        state.items = state.items.filter((i)=> i.name !== item.name);
        alert(`${item.name} has been removed from the cart.`);
        
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; 
      
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
