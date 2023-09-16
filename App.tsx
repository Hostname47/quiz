import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/app/store';
import mobileAds from 'react-native-google-mobile-ads';

import Home from './src/screens/Home';
import QuizzesMap from './src/screens/QuizzesMap';
import QuizPlayer from './src/screens/QuizPlayer';
import More from './src/screens/More';
import Shop from './src/screens/Shop';
import Header from './src/partials/Header';
import BootstrapState from './src/components/BootstrapState';
import {navigationTheme} from './src/utils/navigation-theme';
import {MenuProvider} from 'react-native-popup-menu';
import Banner from './src/ads/Banner';

const {Screen, Navigator} = createStackNavigator();

function App(): JSX.Element {
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {});
  }, []);

  return (
    <MenuProvider>
      <NavigationContainer theme={navigationTheme}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor="#191b1e" />
          <Provider store={store}>
            <BootstrapState />
            <Header />
            <Navigator screenOptions={{headerShown: false}}>
              <Screen name="Home" component={Home} />
              <Screen name="QuizzesMap" component={QuizzesMap} />
              <Screen name="QuizPlayer" component={QuizPlayer} />
              <Screen name="Shop" component={Shop} />
              <Screen name="More" component={More} />
            </Navigator>
            <Banner />
          </Provider>
        </SafeAreaView>
      </NavigationContainer>
    </MenuProvider>
  );
}

export default App;
