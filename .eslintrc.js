module.exports = {
    root: true, 
    parserOptions: {
        sourceType: 'module'
    },
    extends:'eslint:recommended',
    env: {
        browser: true,
        node: true,
        commonjs:true,
        amd:true,
        es6:true
    },
    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        'semi': ['error', 'never'],
        "no-console": "error",
        "arrow-parens": 0,
        "no-console": 2,
        "no-trailing-spaces": 1,
        'indent': ['error', 4],
        'no-unexpected-multiline': 0,
        'no-control-regex': 0,
        'no-multiple-empty-lines': 0,
        "no-unused-vars": [2, { 
        "vars": "local",
        "args": "none" 
        }]
    },
    globals: {
      'jQuery': false,
      'lightbox': false,
      '$': false,
      'ga': false
    }
}