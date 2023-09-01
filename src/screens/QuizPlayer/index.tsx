import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {quizzes} from '../../data/quizzes';
import ScreenTitle from '../../components/ScreenTitle';
import PlayOutlineIcon from '../../components/icons/PlayOutlineIcon';
import {QuizAnswer} from '../../utils/types';
import AnswerCheckbox from './components/AnswerCheckbox';
import Space from '../../components/common/Space';

const QuizPlayer = ({navigation, route}) => {
  const quiz = quizzes[route.params.level - 1];
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

  return (
    <View style={{flex: 1}}>
      <ScreenTitle
        title={'Quiz - level : ' + quiz.level}
        Icon={PlayOutlineIcon}
        handleBack={navigation.goBack}
      />
      <View style={styles.container}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}>
          <FlatList
            data={quiz.options}
            keyExtractor={o => o.toString()}
            renderItem={renderAnswer}
          />
        </View>
      </View>
    </View>
  );
};

export default QuizPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  answerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginVertical: 3,
    backgroundColor: '#111214',
    borderRadius: 3,
    borderColor: '#444851',
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
});
