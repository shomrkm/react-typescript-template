module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs'],
    ['babel-plugin-styled-components'],
    ['react-remove-properties', {"properties": ["data-testid"]}]
  ],
};