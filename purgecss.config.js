module.exports = {

  content: ["./_site/**/*.html"],
  css: ["./_site/dist/main.css"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};

