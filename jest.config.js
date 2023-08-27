module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './testSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',

    // For pnpm you need to use inlcude `(?!(?:.pnpm/)?` part like this:
    // 'node_modules/(?!(?:.pnpm/)?((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
