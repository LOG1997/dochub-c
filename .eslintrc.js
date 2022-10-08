module.exports = {
  env: {
    // 环境
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "plugin:vue/vue3-recommended"], // 可共享配置的名称、eslint:recommended 或 eslint:all,表示默认开启一些内置的规则，包含的，在 https://eslint.bootcss.com/docs/rules/ 中可以查看内置规则
  parserOptions: {
    parser: "babel-eslint",
    // ecmaVersion: "latest", // 指定你想要使用的 ECMAScript 版本
    // sourceType: "module", //"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 配置规则的地方 这里就是我们所需要配置的规则
  },
};
