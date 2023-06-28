const CracoLessPlugin = require("craco-less");
const { loaderByName } = require("@craco/craco");
const path = require("path");
const resolve = function (dir:string) {
  return path.resolve(__dirname, dir);
};
module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule:any) {
          // You have to exclude these file suffixes first,
          // if you want to modify the less module's suffix
          lessRule.exclude = /\.m\.less$/;
          return lessRule;
        },
        modifyLessModuleRule(lessModuleRule:any) {
          // Configure the file suffix
          lessModuleRule.test = /\.m\.less$/;
 
          // Configure the generated local ident name.
          const cssLoader = lessModuleRule.use.find(loaderByName("css-loader"));
          cssLoader.options.modules = {
            localIdentName: "[local]_[hash:base64:5]",
          };
 
          return lessModuleRule;
        },
      },
    },
  ]
};
export {}