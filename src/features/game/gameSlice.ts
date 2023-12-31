import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {gameDefaults} from '../../utils/constants';
import {
  HELPS_NUMBER_TO_BUY,
  HELPS_PRICE,
  LIVES_NUMBER_TO_BUY,
  LIVES_PRICE,
} from '../../utils/constants';
import {QuizItem} from '../../utils/types';
import {quizzes} from '../../data/quizzes';

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
  quiz: QuizItem;
  levelsCount: number;
};

const initialState: InitialState = {
  initialized: false,
  lives: gameDefaults.lives,
  helps: gameDefaults.helps,
  money: gameDefaults.money,
  level: gameDefaults.level,
  quiz: quizzes[0],
  levelsCount: quizzes.length,
};

export const initializeGame = createAsyncThunk(
  'game/initialize',
  async (_, {rejectWithValue}) => {
    try {
      // await AsyncStorage.removeItem('game');
      const gameData = await AsyncStorage.getItem('game');

      if (gameData === null) {
        const game = JSON.stringify({
          money: gameDefaults.money,
          // money: 800,
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
    addLives: (state, action: PayloadAction<number>) => {
      state.lives += action.payload;
    },
    setQuiz: (state, action: PayloadAction<number>) => {
      state.quiz = quizzes[action.payload - 1];
    },
    answer: (state, action: PayloadAction<string | number>) => {
      if (state.quiz.answer === action.payload) {
        /**
         * We  add 5$ and increment the level, even if the user pass
         * an already passed level to help him collect money.
         *
         * Cencerning level, the user should pass the last level he
         * reached so far in order to increment the level; which means
         * if the user pass an already passed level, we don't have to
         * increment the level value.
         */
        state.money += 5;
        if (state.level === state.quiz.level) {
          /**
           * If the user reaches the last level, we don't have to
           * increment the level since he completed all levels.
           */
          if (state.level < state.levelsCount) {
            state.level += 1;
          }
        }
      } else {
        state.lives--;
      }
    },
    reduceHelp: state => {
      state.helps--;
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
export const {
  buyLives,
  buyHelps,
  addMoney,
  addLives,
  setQuiz,
  answer,
  reduceHelp,
} = gameSlice.actions;
