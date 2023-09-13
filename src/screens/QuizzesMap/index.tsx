import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import GameHeader from '../../partials/GameHeader';
import ScreenTitle from '../../components/ScreenTitle';
import MapIcon from '../../components/icons/MapIcon';
import Space from '../../components/common/Space';
import {quizzes} from '../../data/quizzes';
import LevelButton from './components/LevelButton';
import {useAppSelector} from '../../app/hooks';

const QuizzesMap = ({navigation}: {navigation: any}) => {
  const {level} = useAppSelector(state => state.game);

  return (
    <View style={styles.container}>
      <GameHeader />
      <Space vertical distance={6} />
      <ScreenTitle
        title="Quizzes Map"
        Icon={MapIcon}
        handleBack={navigation.goBack}
      />
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={q => q.level.toString()}
          data={quizzes}
          inverted={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item: quiz}) => (
            <LevelButton currentUserLevel={level} level={quiz.level} />
          )}
        />
      </View>
    </View>
  );
};

export default QuizzesMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 40,
  },
});
