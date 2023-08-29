import {useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {bootstrapAppState} from '../app/init';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {playSound, releaseSound, stopSound} from '../utils/sound-manager';

const BACKGROUND_MUSIC_NAME = 'background';

const BootstrapState = () => {
  const appState = useRef<string>(AppState.currentState);
  const app = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  /**
   * The effect responsible for switch the background music on and off
   */
  useEffect(() => {
    if (app.bootstrapped) {
      if (app.music) {
        playSound(BACKGROUND_MUSIC_NAME, true);
      } else {
        stopSound(BACKGROUND_MUSIC_NAME);
      }
    }

    /**
     * Here, we stop the sound when the app goes to the background, and
     * start the sound only if the app was in ther background and go back
     * to the foreground, because in the initial state, if the user enable
     * music, we play the sound outside the app state listener (look at if above)
     */
    const subscription = AppState.addEventListener('change', newState => {
      if (app.bootstrapped) {
        if (app.music) {
          if (
            appState.current.match(/inactive|background/) &&
            newState === 'active'
          ) {
            playSound(BACKGROUND_MUSIC_NAME, true);
          }

          if (newState.match(/inactive|background/)) {
            releaseSound(BACKGROUND_MUSIC_NAME);
          }
        }
      }

      appState.current = newState;
    });

    return () => {
      subscription.remove();
      releaseSound(BACKGROUND_MUSIC_NAME);
    };
  }, [app.music, app.bootstrapped]);

  useEffect(() => {
    dispatch(bootstrapAppState());
  }, []);

  return null;
};

export default BootstrapState;
