module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'camelcase': 'off',
        'no-unused-vars': ['warn', { 'argsIgnorePattern': 'next' }],
        'semi': ['error', 'never'],
        'linebreak-style': 'off',
        'prefer-destructuring': 'warn',
        'no-invalid-regexp': 'error',
        'quotes': ['error', 'single'],
        'no-console': 'off',
        'radix': 'off',
        'no-case-declarations': 'off',
        'max-len': 'off',
        'no-await-in-loop': 'off',
        'no-plusplus': 'off',
        'no-loop-func': 'off',
        'no-restricted-syntax': 'off',
        'comma-dangle': ['error', 'never'],
        'no-mixed-spaces-and-tabs': 'error',
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'no-tabs': 'off',
        'newline-per-chained-call': 'off',
        'no-trailing-spaces': 'off',
        'keyword-spacing': 'off',
        'no-prototype-builtins': 'off',
        'func-names': 'off',
        'no-extend-native': 'off',
        'arrow-parens': 'off',
        'no-unreachable': 'warn',
        'import/no-cycle': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'no-empty': 'off'
    }
}
