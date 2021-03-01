module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    '@webpack-contrib/eslint-config-webpack'
  ],
  settings: {
    ignore: 'node_modules',
    root: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": "off",
    "class-methods-use-this": ["error", {
      "expectMethods": [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentDidMount",
        "shouldComponentUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
      ],
    }],
  },
};
