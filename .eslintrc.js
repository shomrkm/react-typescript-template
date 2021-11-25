module.exports = {
    env: {
      browser: true,
      es2021: true,
      'jest/globals':true
    },
    extends: [
      'plugin:react/recommended',
      // Airbnbが提供する共有設定。広く使われている
      'airbnb',
      'airbnb-typescript',
      // 各プラグイン推奨共有設定
      'airbnb/hooks',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      project: './tsconfig.eslint.json', // プロジェクトに対するコンパイル設定ファイルのパス
      sourceType: 'module',
      tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'react',
        'react-hooks',
        'jest',
        'testing-library'
    ],
    root: true, // 親ディレクトリの設定ファイルを読み込まないように設定
    rules: {
      "import/prefer-default-export": "off",
      "linebreak-style": "off"
    },
    overrides: [
      {
        'files': ['*.tsx'],
        'rules': {
          'react/prop-types': 'off',
        },
      },
    ],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
  };