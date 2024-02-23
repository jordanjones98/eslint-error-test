module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    es2018: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
};
