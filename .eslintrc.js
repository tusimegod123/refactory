module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: 'airbnb',
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        indent: ['error', 4],
        'no-console': 'off',
        'no-use-before-define': ['error', { functions: false, classes: false }],
    },
};
