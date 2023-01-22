module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  ignorePatterns: ["node_modules/*", "spurOnApp/node_modules/*"],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "no-unsafe-optional-chaining": 'error',
  },
};
