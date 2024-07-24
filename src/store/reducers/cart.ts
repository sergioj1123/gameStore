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
      const game = state.items.find((item) => item.id === action.payload.id);
      if (!game) {
        state.items.push(action.payload);
      } else {
        alert('Esse jogo já está no carrinho');
      }
    },
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addToCart, openCart, closeCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
