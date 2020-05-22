module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    plugins: ['import', 'react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            pragma: 'h',
        },
    },
    rules: {
        'react/no-danger': 'off', // For youtube video embedding. XSS protection implemented
        'no-plusplus': '[2, { allowForLoopAfterthoughts: true }]',
    },
};
