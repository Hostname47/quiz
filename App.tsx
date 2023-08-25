import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/app/store';

import Home from './src/screens/Home';
import Quizzes from './src/screens/Quizzes';
import QuizPlayer from './src/screens/QuizPlayer';
import More from './src/screens/More';
import {navigationTheme} from './src/utils/navigation-theme';
import Header from './src/components/common/Header';
import {RootStackParamList} from './src/utils/types';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#191b1e" />
        <Provider store={store}>
          <Header />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quizzes" component={Quizzes} />
            <Stack.Screen name="QuizPlayer" component={QuizPlayer} />
            <Stack.Screen name="More" component={More} />
          </Stack.Navigator>
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
