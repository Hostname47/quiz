import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useReducer, useCallback, useRef} from 'react';
import ScreenTitle from '../../components/ScreenTitle';
import PlayOutlineIcon from '../../components/icons/PlayOutlineIcon';
import {QuizAnswer, QuizItem} from '../../utils/types';
import AnswerCheckbox from './components/AnswerCheckbox';
import Space from '../../components/common/Space';
import Question from './components/Question';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {answer, setQuiz} from '../../features/game/gameSlice';
import GameHeader from '../../partials/GameHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from '../../components/Modal';
import Title from '../../components/common/Title';
import HomeIcon from '../../components/icons/HomeIcon';
import RefreshIcon from '../../components/icons/RefreshIcon';
import HeartIcon from '../../components/icons/HeartIcon';
import RightArrow from '../../components/icons/RightArrow';
import DollarIcon from '../../components/icons/DollarIcon';
import ShopIcon from '../../components/icons/ShopIcon';
import Actions from './components/Actions';
import _ from 'lodash';
import LeftArrow from '../../components/icons/LeftArrow';
import Interstitial from '../../ads/Interstitial';

/**
 * This is used to control the display of interstitial ad whever a user pass
 * this number of levels
 * In this case, the user will see an interstitial ad, whenever he pass 2 levels successfully.
 */
const LEVELS_NUMBER_TO_DISPLAY_INTERSTITIAL = 3;

type ApplySupportType = {
  type: 'apply-support';
  payload: QuizItem;
};

type AnswerActionType = {
  type: 'answer';
  payload: QuizAnswer;
};

type EvaluateAnswerActionType = {
  type: 'evaluate';
  payload: boolean;
};

type SwitchResultModalPayload = {
  type: 'switch-result-modal';
  payload: boolean;
};

type ActionWithoutPayload = {
  type: 'reset' | 'show-interstitial';
};

type Action =
  | ActionWithoutPayload
  | AnswerActionType
  | EvaluateAnswerActionType
  | ApplySupportType
  | SwitchResultModalPayload;

type InitialState = {
  answer: QuizAnswer;
  correct: boolean;
  supportApplied: boolean;
  supportAnswersToExclude: QuizAnswer[];
  resultModalState: boolean;
  adCounter: number;
};

const initialState: InitialState = {
  answer: '',
  correct: false,
  supportApplied: false,
  supportAnswersToExclude: [],
  resultModalState: false,
  adCounter: 0,
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'answer':
      return {
        ...state,
        answer: action.payload,
      };
    case 'evaluate':
      return {
        ...state,
        correct: action.payload,
        resultModalState: true,
      };
    case 'reset':
      return {
        ...state,
        answer: '',
        supportApplied: false,
        supportAnswersToExclude: [],
        resultModalState: false,
        correct: false,
      };
    case 'switch-result-modal':
      return {
        ...state,
        resultModalState: action.payload,
      };
    case 'apply-support': {
      const quiz = action.payload;
      // First we need to check the place of the right answer in order to know what to exclude
      // If the answer is the first or second answer, we need to exclude the last 2 answers.
      // If the answer is the third or last answer, we exlude the first 2 answers.
      // For sake of simplicty let's asume that all questions have 4 answers
      const index = quiz.options.indexOf(quiz.answer);
      let excludedAnswers: QuizAnswer[] = [];
      if (index <= 1) {
        excludedAnswers = _.takeRight(quiz.options, 2);
      } else {
        excludedAnswers = _.take(quiz.options, 2);
      }

      return {
        ...state,
        supportAnswersToExclude: excludedAnswers,
        supportApplied: true,
      };
    }
    case 'show-interstitial':
      return {
        ...state,
        adCounter: state.adCounter + 1,
      };
    default:
      return state;
  }
};

const QuizPlayer = ({navigation, route}: {navigation: any; route: any}) => {
  const adCounterRef = useRef<number>(1);
  const game = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);

  const switchResultModal = useCallback((to: boolean = false) => {
    localDispatch({type: 'switch-result-modal', payload: to});
  }, []);
  const goToStore = () => {
    navigation.navigate('Shop');
  };
  const backToHome = () => {
    switchResultModal(false);
    navigation.replace('Home');
  };
  const replay = () => {
    localDispatch({type: 'reset'});
  };
  const answerQuiz = async (option: string | number) => {
    const data = await AsyncStorage.getItem('game');
    if (data) {
      const gameData = JSON.parse(data);

      if (option === game.quiz.answer) {
        gameData.money += 5;
        if (
          game.quiz.level === gameData.level &&
          gameData.level < game.levelsCount
        ) {
          gameData.level++;
        }
      } else {
        gameData.lives--;
      }

      await AsyncStorage.setItem('game', JSON.stringify(gameData));

      localDispatch({
        type: 'answer',
        payload: option,
      });
    }
  };
  const nextQuiz = () => {
    dispatch(setQuiz(game.quiz.level + 1));
    localDispatch({type: 'reset'});
  };
  const applySupport = () => {
    localDispatch({type: 'apply-support', payload: game.quiz});
  };
  const isExcludedAnswer = (answer: QuizAnswer): boolean => {
    return state.supportAnswersToExclude.includes(answer);
  };
  const renderAnswer = ({item: option}: {item: QuizAnswer}) => {
    return (
      <TouchableOpacity
        key={option}
        style={[
          styles.answerButton,
          state.answer !== option
            ? {}
            : game.quiz.answer === state.answer
            ? styles.greenButton
            : styles.redButton,
          isExcludedAnswer(option) && {opacity: 0.4},
        ]}
        activeOpacity={0.5}
        disabled={
          state.answer !== '' || game.lives <= 0 || isExcludedAnswer(option)
        }
        onPress={() => answerQuiz(option)}>
        <AnswerCheckbox
          state={
            state.answer !== option || state.answer === ''
              ? null
              : game.quiz.answer === state.answer
          }
        />
        <Space distance={8} />
        <Text style={styles.answer}>{option}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(setQuiz(route.params.level));
  }, []);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      // do something
      if (game.lives <= 0) {
        switchResultModal(true);
      }
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      // do something
      if (game.lives <= 0) {
        setTimeout(() => {
          localDispatch({type: 'reset'});
        });
      }
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [game.lives]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (state.answer) {
      timeout = setTimeout(() => {
        dispatch(answer(state.answer));
        localDispatch({
          type: 'evaluate',
          payload: state.answer === game.quiz.answer,
        });
      }, 200);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [state.answer]);

  useEffect(() => {
    if (state.correct) {
      console.log('correct');
      if (adCounterRef.current === LEVELS_NUMBER_TO_DISPLAY_INTERSTITIAL) {
        localDispatch({type: 'show-interstitial'});
        adCounterRef.current = 1;
      } else {
        adCounterRef.current++;
      }
    }
  }, [state.correct]);

  return (
    <View style={{flex: 1}}>
      <GameHeader />
      <ScreenTitle
        title="Quiz player"
        Icon={PlayOutlineIcon}
        handleBack={navigation.goBack}
      />
      <View style={[styles.container, game.lives <= 0 && {opacity: 0.5}]}>
        <Question quiz={game.quiz} />
        <Actions
          answer={state.answer}
          supportApplied={state.supportApplied}
          applySupport={applySupport}
          switchResultModal={switchResultModal}
        />
        <Space distance={6} vertical />
        <View>
          <FlatList
            data={game.quiz.options}
            ItemSeparatorComponent={() => <Space vertical distance={5} />}
            keyExtractor={o => o.toString()}
            renderItem={renderAnswer}
          />
        </View>
      </View>

      <Interstitial counter={state.adCounter} />

      <Modal
        isVisible={state.resultModalState}
        onBackButtonPress={() => switchResultModal(false)}
        onBackdropPress={() => switchResultModal(false)}
        modalViewStyles={[
          styles.resultModal,
          state.correct ? styles.greenModal : styles.redModal,
        ]}>
        {state.correct ? (
          <>
            <Title
              title={
                game.quiz.level < game.levelsCount
                  ? 'Correct !'
                  : '🏆 Congratulation 🏆'
              }
              size={18}
            />
            {game.quiz.level >= game.levelsCount && (
              <>
                <Text style={styles.livesMessage}>
                  Congratulations! 🎉 You've conquered every level and reached
                  the end of the game. You're a true champion! Thanks for
                  playing, and we hope you had an amazing time.
                </Text>
                <Text style={styles.livesMessage}>
                  If you have any questions or improvements to add, feel free to
                  contact us by sending all the informations along with name,
                  and we'll include your name within our contributors list.
                </Text>
              </>
            )}
            <View style={styles.resultModalButtons}>
              <TouchableOpacity
                style={styles.resultModalButton}
                onPress={backToHome}>
                <HomeIcon style={styles.resultModalButtonIcon} />
                <Text style={styles.resultModalButtonTitle}>Home</Text>
              </TouchableOpacity>
              <Space distance={12} />
              {game.quiz.level < game.levelsCount ? (
                <TouchableOpacity
                  style={styles.resultModalButton}
                  onPress={nextQuiz}>
                  <RightArrow style={styles.resultModalButtonIcon} />
                  <Text style={styles.resultModalButtonTitle}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.resultModalButton}
                  onPress={() => switchResultModal(false)}>
                  <LeftArrow style={styles.resultModalButtonIcon} />
                  <Text style={styles.resultModalButtonTitle}>Back</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.resultModalBottom}>
              <Title title="+5" size={20} />
              <DollarIcon style={styles.resultModalResIcon} fill="white" />
            </View>
          </>
        ) : (
          <>
            {game.lives > 0 ? (
              <Title title="Wrong ! Try again" size={18} />
            ) : (
              <>
                <Title title="Unable to play" size={18} />
                <Text style={styles.livesMessage}>
                  You don't have any lives left. You can buy lives in the store,
                  and press Replay button to play again !
                </Text>
              </>
            )}

            <View style={styles.resultModalButtons}>
              <TouchableOpacity
                style={styles.resultModalButton}
                onPress={backToHome}>
                <HomeIcon style={styles.resultModalButtonIcon} />
                <Text style={styles.resultModalButtonTitle}>Home</Text>
              </TouchableOpacity>
              <Space distance={12} />
              {game.lives > 0 ? (
                <TouchableOpacity
                  style={styles.resultModalButton}
                  onPress={replay}
                  disabled={game.lives <= 0}>
                  <RefreshIcon style={styles.resultModalButtonIcon} />
                  <Text style={styles.resultModalButtonTitle}>Replay</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.resultModalButton}
                  onPress={goToStore}>
                  <ShopIcon style={styles.resultModalButtonIcon} />
                  <Text style={styles.resultModalButtonTitle}>Store</Text>
                </TouchableOpacity>
              )}
            </View>
            {state.answer && (
              <View style={styles.resultModalBottom}>
                <Title title="-1" size={20} />
                <Space distance={4} />
                <HeartIcon style={styles.resultModalResIcon} fill="white" />
              </View>
            )}
          </>
        )}
      </Modal>
    </View>
  );
};

export default QuizPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 0,
  },
  answerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#111214',
    borderRadius: 3,
    borderColor: '#111214',
    borderWidth: 1,
  },
  answer: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.6,
  },
  greenButton: {
    backgroundColor: '#314233',
    borderColor: '#57a864',
  },
  redButton: {
    backgroundColor: '#3a2a2a',
    borderColor: '#a86666',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIcon: {
    width: 54,
    height: 54,
  },
  resultModal: {
    alignItems: 'center',
  },
  greenModal: {
    backgroundColor: '#378947',
  },
  redModal: {
    backgroundColor: '#af5050',
  },
  resultModalButtons: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  resultModalButton: {
    width: 90,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff30',
    borderRadius: 6,
  },
  resultModalButtonIcon: {
    width: 30,
    height: 30,
    fill: 'white',
    marginBottom: 6,
  },
  resultModalButtonTitle: {
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },
  resultModalResIcon: {
    width: 30,
    height: 30,
  },
  resultModalBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  livesMessage: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginVertical: 12,
    paddingHorizontal: 30,
  },
});
