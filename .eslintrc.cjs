module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended",
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreIIFE: true,
      },
    ],
  },
}
