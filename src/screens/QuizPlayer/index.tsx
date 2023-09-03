import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState, useReducer} from 'react';
import ScreenTitle from '../../components/ScreenTitle';
import PlayOutlineIcon from '../../components/icons/PlayOutlineIcon';
import {QuizAnswer} from '../../utils/types';
import AnswerCheckbox from './components/AnswerCheckbox';
import Space from '../../components/common/Space';
import Question from './components/Question';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {setQuiz} from '../../features/game/gameSlice';
import GameHeader from '../../partials/GameHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from '../../components/Modal';
import Title from '../../components/common/Title';
import HomeIcon from '../../components/icons/HomeIcon';
import RefreshIcon from '../../components/icons/RefreshIcon';
import HeartIcon from '../../components/icons/HeartIcon';
import RightArrow from '../../components/icons/RightArrow';
import DollarIcon from '../../components/icons/DollarIcon';

type InitialState = {
  answer: string | number;
  correct: boolean;
  resultModalState: boolean;
};

const initialState: InitialState = {
  answer: '',
  correct: false,
  resultModalState: true,
};

const reducer = (state: InitialState, action) => {
  switch (action.type) {
    case 'switch-result-modal':
      return {
        ...state,
        resultModalState: !state.resultModalState,
      };
    default:
      return state;
  }
};

const QuizPlayer = ({navigation, route}) => {
  const game = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);

  const switchResultModal = () => {
    localDispatch({type: 'switch-result-modal'});
  };
  const backToHome = () => {};
  const replay = () => {};
  const answerQuiz = async (option: string | number) => {};

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
        ]}
        activeOpacity={0.5}
        disabled={state.answer !== ''}
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

  return (
    <View style={{flex: 1}}>
      <GameHeader />
      <ScreenTitle
        title="Quiz player"
        Icon={PlayOutlineIcon}
        handleBack={navigation.goBack}
      />
      <View style={styles.container}>
        <Question quiz={game.quiz} />
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

      <Modal
        isVisible={state.resultModalState}
        onBackButtonPress={switchResultModal}
        onBackdropPress={switchResultModal}
        modalViewStyles={[
          styles.resultModal,
          state.correct ? styles.greenModal : styles.redModal,
        ]}>
        {state.correct ? (
          <>
            <Title title="Correct !" size={18} />
            <View style={styles.resultModalButtons}>
              <TouchableOpacity style={styles.resultModalButton}>
                <HomeIcon style={styles.resultModalButtonIcon} />
                <Text style={styles.resultModalButtonTitle}>Home</Text>
              </TouchableOpacity>
              <Space distance={12} />
              <TouchableOpacity style={styles.resultModalButton}>
                <RightArrow style={styles.resultModalButtonIcon} />
                <Text style={styles.resultModalButtonTitle}>Next</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resultModalBottom}>
              <Title title="+5" size={20} />
              <DollarIcon style={styles.resultModalResIcon} fill="white" />
            </View>
          </>
        ) : (
          <>
            <Title title="Wrong ! Try again" size={18} />
            <View style={styles.resultModalButtons}>
              <TouchableOpacity style={styles.resultModalButton}>
                <HomeIcon style={styles.resultModalButtonIcon} />
                <Text style={styles.resultModalButtonTitle}>Home</Text>
              </TouchableOpacity>
              <Space distance={12} />
              <TouchableOpacity style={styles.resultModalButton}>
                <RefreshIcon style={styles.resultModalButtonIcon} />
                <Text style={styles.resultModalButtonTitle}>Replay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resultModalBottom}>
              <Title title="-1" size={20} />
              <Space distance={4} />
              <HeartIcon style={styles.resultModalResIcon} fill="white" />
            </View>
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
  },
  resultModalButtonTitle: {
    marginTop: 6,
    fontWeight: '700',
    fontSize: 13,
  },
  resultModalResIcon: {
    width: 30,
    height: 30,
  },
  resultModalBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
