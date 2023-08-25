import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type InitialState = {
  lives: number;
  helps: number;
  money: number;
  currentLevel: number;
};

const initialState: InitialState = {
  lives: 3,
  helps: 3,
  money: 60,
  currentLevel: 0,
};

const gameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.currentLevel++;
      } else {
        state.lives--;
      }
    },
  },
});

export default gameSlice.reducer;
export const {play} = gameSlice.actions;
