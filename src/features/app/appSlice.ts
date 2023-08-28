import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type InitialState = {
  bootstrapped: boolean;
  music: boolean;
  notification: string;
  notificationIndex: number;
};

const initialState: InitialState = {
  bootstrapped: false,
  music: true,
  notification: '',
  notificationIndex: 0,
};

export const initializeApp = createAsyncThunk(
  'app/initialize',
  async (_, {rejectWithValue}) => {
    try {
      const music = await AsyncStorage.getItem('music');
      if (music === null) {
        await AsyncStorage.setItem('music', '1');

        return rejectWithValue('App is not initialized');
      }

      return music === '1';
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      state.music = action.payload;
      state.bootstrapped = true;
    });

    builder.addCase(initializeApp.rejected, state => {
      state.music = true;
      state.bootstrapped = true;
    });
  },
});

export default appSlice.reducer;
