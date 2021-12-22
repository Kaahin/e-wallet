module.exports = {
  root: true,

  globals: {
    defineProps: "readonly",
    defineEmits: "readonly"
  },
  env: {
    // "vue/setup-compiler-macros": true,
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
    requireConfigFile: false
  },
  rules: {
    // Enable vue/script-setup-uses-vars rule
    "vue/script-setup-uses-vars": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
