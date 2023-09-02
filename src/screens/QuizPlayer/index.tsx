import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenTitle from '../../components/ScreenTitle';
import PlayOutlineIcon from '../../components/icons/PlayOutlineIcon';
import {QuizAnswer, QuizItem} from '../../utils/types';
import AnswerCheckbox from './components/AnswerCheckbox';
import Space from '../../components/common/Space';
import Question from './components/Question';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {setQuiz} from '../../features/game/gameSlice';
import QuestionIcon from '../../components/icons/QuestionIcon';
import GameHeader from '../../partials/GameHeader';

const QuizPlayer = ({navigation, route}) => {
  const {quiz} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const [initialized, setInitialized] = useState(false);
  const [answer, setAnswer] = useState<string | number>('');

  const answerQuiz = async (option: string | number) => {
    setAnswer(option);
  };

  const renderAnswer = ({item: option}: {item: QuizAnswer}) => {
    return (
      <TouchableOpacity
        key={option}
        style={[
          styles.answerButton,
          answer !== option
            ? {}
            : answer === quiz.answer
            ? styles.greenButton
            : styles.redButton,
        ]}
        activeOpacity={0.5}
        disabled={answer !== ''}
        onPress={() => answerQuiz(option)}>
        <AnswerCheckbox
          state={
            answer !== option || answer === '' ? null : answer === quiz.answer
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
    if (quiz.level === route.params.level) {
      setInitialized(true);
    }
  }, [quiz]);

  return initialized ? (
    <View style={{flex: 1}}>
      <GameHeader />
      <ScreenTitle
        title="Quiz player"
        Icon={PlayOutlineIcon}
        handleBack={navigation.goBack}
      />
      <View style={styles.container}>
        <Question quiz={quiz} />
        <Space distance={6} vertical />
        <View>
          <FlatList
            data={quiz.options}
            ItemSeparatorComponent={() => <Space vertical distance={5} />}
            keyExtractor={o => o.toString()}
            renderItem={renderAnswer}
          />
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.loading}>
      <QuestionIcon style={styles.loadingIcon} fill="white" />
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
});
