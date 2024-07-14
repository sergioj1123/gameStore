import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../pages/Home';

type CartState = {
  items: Game[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Game>) {
      state.items.push(action.payload);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addToCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
