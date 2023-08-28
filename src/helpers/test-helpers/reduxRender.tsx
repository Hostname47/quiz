import {ReactNode} from 'react';
import store from '../../app/store';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

export const reduxRender = (ui: ReactNode) => {
  return render(
    <NavigationContainer>
      <Provider store={store}>{ui}</Provider>
    </NavigationContainer>,
  );
};
