const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const devMode=process.argv.indexOf('--mode=production')===-1

module.exports={
  mode:'development',
  entry:{
    main:path.resolve(__dirname,'../src/main.js')
  },
  output:{
    filename:'js/[name].[hash:8].js',
    chunkFilename:'js/[name].[hash:8].js',
    path:path.resolve(__dirname,'../dist')
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.runtime.esm.js',
      '@':path.resolve(__dirname,'../src'),
      '@components':path.resolve(__dirname,'../src/components'),
      '@assets':path.resolve(__dirname,'../src/assets'),
    },
    extensions:['*','.js','.json','.vue']
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        use:['babel-loader'],
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        use:[{
          loader:'vue-loader',
          options:{
            compilerOptions:{
              preserveWhitespace:false
            }
          }
        }]
      },
      {
        test:/\.css$/,
        use:[{
          loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          options:{
            publicPath:"../dist/css/",
            hmr:devMode
          }
        },'css-loader',{
          loader:'postcss-loader',
          options:{
            plugins:[require('autoprefixer')]
          }
        }]
      },
      {
        test:/\.scss$/,
        use:[{
          loader:devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          options:{
            publicPath:"../dist/css/",
            hmr:devMode
          }
        },
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: 'src/assets/css/index.scss',
          },
        },
        {
          loader:'postcss-loader',
          options:{
            plugins:[require('autoprefixer')]
          }
        }]
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../public/index.html')
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:devMode?'[name].css':'[name].[hash:6].css',
      chunkFilename:devMode?'[id].css':'[id].[hash:6].css'
    })
  ]
}