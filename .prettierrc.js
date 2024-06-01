module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: "as-needed",
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: "always",
  singleQuote: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: ["*.less", "*.css"],
      options: {
        singleQuote: false
      }
    }
  ]
};
