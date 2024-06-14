module.exports = {
	env: {
		browser: true,
		es2021: true,
		jquery: true,
	},
	extends: 'airbnb-base',
	plugins: ['jquery'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'indent': ['error', 4],

		// Move the invocation inside the IIFE
		'wrap-iife': ['error', 'inside'],

		// Allow unnamed functions where necessary
		'func-names': 'off', 
		
		// Allow assignment to properties of function parameters
		'no-param-reassign': 'off',

		// Prefer arrow functions where possible
		'prefer-arrow-callback': 'error',

		'no-useless-computed-key': 'off',
	},
	settings: {
		"import/resolver": {
			"babel-module": {}
		}
	}
};
