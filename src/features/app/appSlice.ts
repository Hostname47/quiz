import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

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

export const switchBackgroundMusic = createAsyncThunk(
  'app/music/switch',
  async (_, {rejectWithValue}) => {
    try {
      const music = await AsyncStorage.getItem('music');
      if (music === '1') {
        await AsyncStorage.setItem('music', '0');
        return false;
      } else {
        await AsyncStorage.setItem('music', '1');
        return true;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // switchBackgroundMusic: (state, action) => {
    //   state.music = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      state.music = action.payload;
      state.bootstrapped = true;
    });
    builder.addCase(initializeApp.rejected, state => {
      state.music = true;
      state.bootstrapped = true;
    });

    builder.addCase(
      switchBackgroundMusic.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.music = action.payload;
      },
    );
    builder.addCase(switchBackgroundMusic.rejected, state => {
      state.music = true;
    });
  },
});

export default appSlice.reducer;
