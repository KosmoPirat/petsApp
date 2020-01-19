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
            jsx: true
        }
    },
    settings: {
        react: {
            pragma: "h"
        },
        linkComponents: [
            { name: "Link", linkAttribute: "href" }
        ]
    }
};