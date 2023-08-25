import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type InitialState = {
  username: string;
  gender: string;
  avatar: string;
};

const initialState: InitialState = {
  username: '',
  gender: '',
  avatar: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;
