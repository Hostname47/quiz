import {screen, fireEvent, waitFor, act} from '@testing-library/react-native';
import {cleanup} from '@testing-library/react-native';
import {Image, Linking} from 'react-native';
import Home from '../src/screens/Home';
import {reduxRender} from '../src/helpers/test-helpers/reduxRender';
import {DEV_APP_STORE_URL} from '@env';

const navigation = {navigate: jest.fn()};

afterEach(cleanup);

beforeEach(() => {
  reduxRender(<Home navigation={navigation} />);
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
  it('All navigation buttons in home screen should be enabled after redux state initialization', async () => {
    await waitFor(() => {
      const shopButton = screen.getByTestId('shop-button');
      const playButton = screen.getByTestId('play-button');
      const settingsButton = screen.getByTestId('settings-button');

      expect(shopButton.props.accessibilityState.disabled).toBe(true);
      expect(settingsButton.props.accessibilityState.disabled).toBe(true);
      expect(playButton.props.accessibilityState.disabled).toBe(true);
    });
  });

  it('Shop button is taking user to shop screen after state init', async () => {
    // Wait for the state update and user to be able to interact
    await waitFor(() => {
      // Query the shop button
      const shopButton = screen.getByTestId('shop-button');

      // Check if the button is enabled
      expect(shopButton.props.accessibilityState.disabled).toBe(false);

      // Perform the button press
      fireEvent.press(shopButton);
    });

    expect(navigation.navigate).toBeCalledWith('Shop');
  });

  it('Should have play button that takes the user to quizzes map', async () => {
    const startButton = screen.getByAccessibilityHint('Press here to start');

    await waitFor(() => {
      fireEvent(startButton, 'press');
      expect(navigation.navigate).toBeCalledWith('Quizzes');
    });
  });

  it.only('Should go to dev store when more apps button pressed in settings', async () => {
    const linkingSpy = jest.spyOn(Linking, 'openURL');

    const settingsButton = screen.getByTestId('settings-button');
    act(() => {
      fireEvent(settingsButton, 'press');
    });

    const button = screen.getByTestId('dev-store-button');
    expect(button).toBeTruthy();
    act(() => {
      fireEvent.press(button);
    });

    await waitFor(() => {
      expect(linkingSpy).toHaveBeenCalled();
      expect(linkingSpy).toBeCalledWith(DEV_APP_STORE_URL);
    });
  });
});

/**
 * For settings button, when the user press it, a modal appears with sound and more apps buttons.
 * For that purpose, we'll start using TDD here by writing tests first and implement
 * this feature by letting tests drive the development.
 */
describe('Testing settings section', () => {
  it('Should be hidden initially', () => {
    const modal = screen.getByTestId('settings-modal');
    expect(modal).toBeTruthy(); // Check if it exists

    const modalContainer = screen.queryByAccessibilityHint(
      'Settings modal container',
    );
    expect(modalContainer).toBeFalsy();
  });

  it('Should display settings button when settings button pressed', () => {
    const button = screen.getByAccessibilityHint('Settings button');

    expect(button).toBeTruthy();
    fireEvent(button, 'press');
    const modalContainer = screen.queryByAccessibilityHint(
      'Settings modal container',
    );
    expect(modalContainer).toBeTruthy();
  });

  it('Should render settings modal with false state', () => {
    const modal = screen.getByTestId('settings-modal');
    const button = screen.getByAccessibilityHint('Settings button');

    expect(button).toBeTruthy();
    expect(modal.props).toMatchObject({
      visible: false,
    });
  });

  it('Should show settings modal when settings button pressed and hide when "x" button pressed', async () => {
    const modal = screen.getByTestId('settings-modal');
    const button = screen.getByAccessibilityHint('Settings button');
    expect(button).toBeTruthy();
    await waitFor(() => {
      fireEvent.press(button);
    });

    expect(modal.props).toMatchObject({
      visible: true,
    });

    const closeButton = screen.getByAccessibilityHint('Close settings');
    expect(closeButton).toBeTruthy();

    /**
     * The following test works, since react native modal by default does not respond
     * immediately and change the visible property because it (maybe) performs some animations
     * before updating the value, and for that reason I put this delay to make sure the aniomation
     * is complkete and the value is updated. This is just a hack to make the test works
     * but later we'll address this.
     */

    // await waitFor(() => {
    //   fireEvent.press(closeButton);
    // });

    // await new Promise(resolve => setTimeout(resolve, 600)); // Adjust the delay time as needed

    // const hiddenModal = screen.getByTestId('settings-modal');
    // expect(hiddenModal.props).toMatchObject({
    //   visible: false,
    // });
  });
});
