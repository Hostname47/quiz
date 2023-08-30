import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {gameDefaults} from '../../utils/constants';
import {
  HELPS_NUMBER_TO_BUY,
  HELPS_PRICE,
  LIVES_NUMBER_TO_BUY,
  LIVES_PRICE,
} from '../../utils/constants';

type Game = {
  lives: number;
  helps: number;
  money: number;
  level: number;
};

type InitialState = {
  initialized: boolean;
  lives: number;
  helps: number;
  money: number;
  level: number;
};

const initialState: InitialState = {
  initialized: false,
  lives: gameDefaults.lives,
  helps: gameDefaults.helps,
  money: gameDefaults.money,
  level: gameDefaults.level,
};

export const initializeGame = createAsyncThunk(
  'game/initialize',
  async (_, {rejectWithValue}) => {
    try {
      const gameData = await AsyncStorage.getItem('game');

      if (gameData === null) {
        const game = JSON.stringify({
          money: gameDefaults.money,
          lives: gameDefaults.lives,
          helps: gameDefaults.helps,
          level: gameDefaults.level,
        });

        await AsyncStorage.setItem('game', game);

        return rejectWithValue('Game data is not initialized');
      }

      return JSON.parse(gameData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    buyLives: state => {
      state.lives += LIVES_NUMBER_TO_BUY;
      state.money -= LIVES_PRICE;
    },
    buyHelps: state => {
      state.helps += HELPS_NUMBER_TO_BUY;
      state.money -= HELPS_PRICE;
    },
    addMoney: (state, action: PayloadAction<number>) => {
      state.money += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      initializeGame.fulfilled,
      (state, action: PayloadAction<Game>) => {
        state.initialized = true;
        state.lives = action.payload.lives;
        state.money = action.payload.money;
        state.helps = action.payload.helps;
        state.level = action.payload.level;
      },
    );
    builder.addCase(initializeGame.rejected, state => {
      state.initialized = true;
    });
  },
});

export default gameSlice.reducer;
export const {buyLives, buyHelps, addMoney} = gameSlice.actions;
