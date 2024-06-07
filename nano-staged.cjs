module.exports = {
  '**/*': ['prettier --write --ignore-unknow'],
  '*.{vue,js,ts}': ['eslint --fix'],
  '*.{scss,css}': ['stylelint --fix'],
  '*.md': ['markdownlint-cli2 --fix'],
  'package.json': ['sort-package-json ./package.json'],
};
