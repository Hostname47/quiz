import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type InitialState = {
  initialized: boolean;
  pseudo: string;
  avatar: number;
};

const initialState: InitialState = {
  initialized: false,
  pseudo: '#pseudo',
  avatar: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;
