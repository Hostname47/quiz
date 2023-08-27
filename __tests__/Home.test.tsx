import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {Image} from 'react-native';
import Home from '../src/screens/Home';
import {Provider} from 'react-redux';
import store from '../src/app/store';

const navigation = {navigate: jest.fn()};

const renderScreen = () => {
  return render(
    <Provider store={store}>
      <NavigationContainer>
        <Home navigation={navigation} />
      </NavigationContainer>
    </Provider>,
  );
};

beforeEach(() => {
  renderScreen();
});

// it.skip('Should match snapshot', () => {
//   const {toJSON} = screen;

//   /**
//    * Using snapshots to test the root element (in this case the whole screen) is a mistake
//    * since snapshot update fatigue is real.
//    */
//   expect(toJSON()).toMatchSnapshot();
// });

it('Should have stuff in it 😋', () => {
  /**
   * Here in home sreen test, we just test the presence of game header, and
   * we don't have to check the values and state, because we'll do that when
   * we test the GameHeader component separately
   */
  const avatar = screen.getByTestId('user-avatar');
  expect(avatar).toBeTruthy();

  const title = screen.getByText(/\b\w+ Quiz\b/);
  expect(title).toBeTruthy();

  const image = screen.getByAccessibilityHint(
    'Welcome image that shows in home screen',
  );
  // Extract the source from the image component
  const resolvedSource = Image.resolveAssetSource(image.props.source);
  // Check if the source URI exists locally
  const existsLocally = resolvedSource.uri !== null;
  expect(image).toBeTruthy();
  expect(existsLocally).toBe(true);
});

describe('Testing navigation actions', () => {
  it('Should have shop button that takes the user to shop', () => {
    const shopButton = screen.getByAccessibilityHint(
      'Shop button to go to shop screen',
    );
    expect(shopButton).toBeTruthy();
    fireEvent(shopButton, 'press');
    expect(navigation.navigate).toBeCalledWith('Shop');
  });

  it('Should have play button that takes the user to quizzes map', () => {
    const startButton = screen.getByAccessibilityHint('Press here to start');
    expect(startButton).toBeTruthy();
    fireEvent(startButton, 'press');
    expect(navigation.navigate).toBeCalledWith('Quizzes');
  });
});

/**
 * For settings button, when the user press it, a bottom sheet should
 * appear with sound and more apps.
 * For that purpose, we'll start using TDD here by writing tests first and implement
 * this feature by letting tests drive the development.
 */
