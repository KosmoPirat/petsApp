module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    plugins: ['import', 'react', 'jsx-a11y'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            pragma: "h"
        }
    },
    rules: {
        'jsx-a11y/tabindex-no-positive': 'off'
    }
};