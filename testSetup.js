import {reduxRender} from './src/helpers/test-helpers/reduxRender';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

global.reduxRender = reduxRender;
