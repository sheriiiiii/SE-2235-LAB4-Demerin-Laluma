export default {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFilesAfterEnv: ['./__tests__/setupTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
