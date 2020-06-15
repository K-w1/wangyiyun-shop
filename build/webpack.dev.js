const webpack=require('webpack')
const common=require('./webpack.config.js')
const merge=require('webpack-merge')

module.exports=merge(common,{
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  devServer:{
    port:8888,
    hot:true,
    quiet:false,
    inline:true,
    stats:'errors-only',
    overlay:false,
    clientLogLevel:'silent',
    compress:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
})