export default {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:jsdoc/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["import", "promise", "jsdoc"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@styles", "^@js", "^@images", "^@data"],
      },
    ],
    "jsdoc/require-jsdoc": "off",
  },
  settings: {
    jsdoc: {
      mode: "typescript",
    },
  },
};

