import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEFAULT_USER_AVATAR, DEFAULT_USER_PSEUDO} from '../../utils/constants';

type User = {
  pseudo: string;
  avatar: number;
};

type InitialState = {
  initialized: boolean;
  pseudo: string;
  avatar: number;
};

const initialState: InitialState = {
  initialized: false,
  pseudo: DEFAULT_USER_PSEUDO,
  avatar: DEFAULT_USER_AVATAR,
};

export const initializeUser = createAsyncThunk(
  'user/initialize',
  async (_, {rejectWithValue}) => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData === null) {
        const user = JSON.stringify({
          pseudo: DEFAULT_USER_PSEUDO,
          avatar: DEFAULT_USER_AVATAR,
        });

        await AsyncStorage.setItem('user', user);

        return rejectWithValue('User is not initialized');
      }

      return JSON.parse(userData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      initializeUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.initialized = true;
        state.avatar = action.payload.avatar;
        state.pseudo = action.payload.pseudo;
      },
    );
    builder.addCase(initializeUser.rejected, state => {
      state.initialized = true;
      /**
       * Here the avatar and pseudo will take the default values and those default values
       * will be stored in async storage. (The user later can change them if he wants)
       */
    });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
