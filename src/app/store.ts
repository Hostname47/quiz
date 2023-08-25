import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import gameSlice from '../features/game/gameSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
