import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../pages/Home';

type CartState = {
  items: Game[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Game>) {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
