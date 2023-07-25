const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const alias = {
  '@': path.resolve(__dirname, "./example"),
  '@try': path.resolve(__dirname, "./components"),
  '@lib': path.resolve(__dirname, "./lib"),
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 修改入口文件
    config.entry("app").clear().add("./example/main.ts");

    // 修改alias
    Object.keys(alias).forEach((key) => {
      config.resolve.alias.set(key, alias[key]);
    });
  }
});
