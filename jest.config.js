module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  globals: {
    __DEV__: true
  },
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  verbose: true
}
