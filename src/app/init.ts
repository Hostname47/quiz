import {createAsyncThunk} from '@reduxjs/toolkit';
import {initializeGame} from '../features/game/gameSlice';
import {initializeUser} from '../features/user/userSlice';
import {initializeApp} from '../features/app/appSlice';

export const bootstrapAppState = createAsyncThunk(
  'app/state/bootstrap',
  async (_, {dispatch}) => {
    try {
      await dispatch(initializeUser());
      await dispatch(initializeGame());
      await dispatch(initializeApp());
    } catch (error) {
      // Handle errors if necessary
      throw error;
    }
  },
);
