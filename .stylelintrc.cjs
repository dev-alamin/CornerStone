export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "no-descending-specificity": null,
  },
  ignoreFiles: ["dist/**/*", "node_modules/**/*"],
};

