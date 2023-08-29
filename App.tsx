import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/app/store';

import Home from './src/screens/Home';
import Quizzes from './src/screens/Quizzes';
import QuizPlayer from './src/screens/QuizPlayer';
import More from './src/screens/More';
import {navigationTheme} from './src/utils/navigation-theme';
import Header from './src/partials/Header';
// import {RootStackParamList} from './src/utils/types';
import Shop from './src/screens/Shop';
import BootstrapState from './src/components/BootstrapState';

// const {Screen, Navigator} = createStackNavigator<RootStackParamList>(); // temporarily disable typing navigation
const {Screen, Navigator} = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#191b1e" />
        <Provider store={store}>
          <BootstrapState />
          <Header />
          <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Quizzes" component={Quizzes} />
            <Screen name="QuizPlayer" component={QuizPlayer} />
            <Screen name="Shop" component={Shop} />
            <Screen name="More" component={More} />
          </Navigator>
          <View style={styles.banner} />
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 50,
    width: 320,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});

export default App;
