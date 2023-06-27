const { 
    override, 
    overrideDevServer,
    addWebpackAlias,
    addWebpackPlugin,
    fixBabelImports,
    addLessLoader
} = require("customize-cra")
const webpack = require("webpack")
const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")
process.env.BROWSER = "true"
process.env.PORT = 8888
const addLessStyle=() => (config)=>{
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    const lessIndex = loaders.findIndex((item)=>{
        return item.test && item.test.toString().indexOf(".less")!=-1
    })
    if(lessIndex != -1){
        loaders[lessIndex].use.push({
            loader:"style-resources-loader",
            options:{
                patterns: path.resolve(__dirname,"src/thems/global.less")
            }
        })
    }
    return config
}
module.exports = {
    webpack:override(
        addWebpackAlias({
            "@":path.resolve("src")
        }),
        addLessStyle(),
        addWebpackPlugin(new ESLintPlugin({
            fix:true,
            extensions:["ts","tsx","less"]
        })),
        fixBabelImports("import",{
            libraryName:"antd",
            libraryDirectory:"es",
            style:true
        }),
        // addLessLoader({
        //     javascriptEnabled:true,
        //     modifyVars:{
        //         // hack:`true;@import "${path.resolve(
        //         //     "antd/lib/style/color/colorPalette.less"
        //         // )}";`,
        //         // ...defaultThemeVars,
        //         "@primary-color":"#6e41ff",
        //         "@heading-color":"#0000d9"
        //     },
        //     localIdentName:"[local]--[hash:base64:5]"
        // })
    ),
    devServer: overrideDevServer((config) => {
        return {
            ...config
        }
    })
}