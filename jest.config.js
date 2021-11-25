module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: [
      '<rootDir>/src'
    ],
    testMatch: [
      "**/?(*.)+(test).+(ts|tsx|js|jsx)"
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
      "^.+\\.(js)$": "babel-jest",
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx'
    ],
    transformIgnorePatterns: [
      "/node_modules/(?!(ol)/).*/"
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|sss|style)$": "<rootDir>/node_modules/jest-css-modules"
    },
    globals: {
      'ts-jest': {
        'tsconfig': '<rootDir>/tsconfig.json'
      }
    }
  };