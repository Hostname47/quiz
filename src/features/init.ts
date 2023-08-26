import {createAsyncThunk} from '@reduxjs/toolkit';
import {initializeGame} from './game/gameSlice';
import {initializeUser} from './user/userSlice';

export const initializeGameAndUser = createAsyncThunk(
  'initializeUserAndGame',
  async (_, {dispatch}) => {
    try {
      await dispatch(initializeUser());
      await dispatch(initializeGame());
    } catch (error) {
      // Handle errors if necessary
      throw error;
    }
  },
);
