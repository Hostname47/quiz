import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/app/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar backgroundColor="#191b1e" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
