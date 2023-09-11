import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';

const More = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default More;
