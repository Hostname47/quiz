import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import Home from '../src/screens/Home';
import {Provider} from 'react-redux';
import store from '../src/app/store';

const navigation = {navigate: jest.fn()};

describe('Testing navigation actions', () => {
  it('Should match snapshot', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home navigation={navigation} />
        </NavigationContainer>
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
