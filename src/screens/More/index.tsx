import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import Privacy from './Privacy';
import Terms from './Terms';
import Contact from './contact';

const More = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={About} name="About" />
      <Stack.Screen component={Privacy} name="Privacy" />
      <Stack.Screen component={Terms} name="Terms" />
      <Stack.Screen component={Contact} name="Contact" />
    </Stack.Navigator>
  );
};

export default More;
