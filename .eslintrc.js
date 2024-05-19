module.exports = {
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  rules: {
    indent: ['off', 2, { SwitchCase: 1 }],
    quotes: 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'warn',
    'prettier/prettier': [
      'warn',
      {
        parser: 'typescript',
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowNew: false,
        allowLiteral: false,
        allowObject: true,
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['.eslintrc.js', '/apps/terra/app/tools/glslEditor/libs'],
}
