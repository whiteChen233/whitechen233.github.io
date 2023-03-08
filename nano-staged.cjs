module.exports = {
  '*.{vue,js,ts}': ['eslint --fix', 'prettier --write'],
  '*.{scss,css}': ['stylelint --fix', 'prettier --write'],
  '*.{json,yml}': ['prettier --write'],
  '*.md': ['markdownlint', 'prettier --write'],
  'package.json': ['sort-package-json ./package.json'],
};
