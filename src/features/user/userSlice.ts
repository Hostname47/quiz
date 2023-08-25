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

const userSlice = createSlice({
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

export default userSlice.reducer;
export const {play} = userSlice.actions;
