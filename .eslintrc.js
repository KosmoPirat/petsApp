module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: ['airbnb', 'standard', 'standard-preact', 'prettier'],
    plugins: ['babel', 'import', 'jsx-a11y', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'linebreak-style': 'off',
        'indent': ["error", 4, {
            "VariableDeclarator": "first",
            "SwitchCase": 2
        }],

        'arrow-parens': 'off',
        'object-curly-newline': 'off',
        'no-mixed-operators': 'off',
        'arrow-body-style': 'off',
        'function-paren-newline': 'off',
        'no-plusplus': 'off',
        'space-before-function-paren': 0,
        'no-debugger': 'error',

        'max-len': ["error", {
            "code": 100,
            "tabWidth": 4,
            "ignoreUrls": true,
            "ignoreComments": true,
            "ignoreTrailingComments": true,
            "ignoreRegExpLiterals": true
        }],
        'no-console': 'error',
        'no-alert': 'error',
        'no-mixed-spaces-and-tabs': 'error',

        'no-param-reassign': 'off',
        "radix": "off",

        'react/require-default-props': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
        "react/jsx-indent" : ["error", 4],
        "react/no-unused-state": "off",
        "react/no-unknown-property": ["error", {ignore: ['class']}],
        "react/jsx-indent-props": ['error', 'first'],

        'prefer-destructuring': 'off',

        "class-methods-use-this": "off",

        "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
        "jsx-a11y/label-has-for": [2, {
            "required": {
                "every": ["id"]
            }
        }], // для ошибки вложенных свойств htmlFor элементов label

        'prettier/prettier': ['error'],
    },
};