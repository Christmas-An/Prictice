const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname,'./src/index.html'), // 模板文件的绝对路径
  filename:'index.html'
})

module.exports = {
  mode:"development",
  plugins:[
    htmlWebpackPlugin
  ],
  module: { // 所有第三方 模块的配置规则
    rules: [ // 第三方匹配规则
      {
        test:/\.js|jsx$/,
        use:'babel-loader',
        exclude:/node_modules/
      }, // 千万别忘记添加 exclude 排除项
    ]
  },
  resolve:{
    extensions:[ ".js",".jsx",".json" ], // 可省略文件名
    alias: {
      // __dirname 当前文件所在目录的绝对路径
      // __filename 当前文件的绝对路径
      "@":path.join(__dirname, "./src")
    }
  }
}