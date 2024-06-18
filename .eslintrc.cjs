module.export = [
  'plugin:vue/vue3-essential',
  'love',
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'plugin:prettier/recommended',
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/.vuepress/.cache/**', '**/.vuepress/.temp/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allow',
        },
        {
          selector: ['variable'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: ['parameter'],
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: ['property'],
          format: null,
          custom: {
            regex: '(^\\/$|^/.*/$|^@|^[a-z]+(?:-[a-z]+)*?$)',
            match: true,
          },
          filter: '(^\\/$|^/.*/$|^@|^[a-z]+(?:-[a-z]+)*?$)',
        },
        {
          selector: ['property'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'import',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
];
