module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": 0,
    "no-console": 0,
    "semi": [0],
    "eqeqeq": 0,
    "comma-dangle": 0,
    "no-empty": 0,
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    "no-useless-escape": 0
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
