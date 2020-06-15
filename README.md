# 2020-6-9
  1. 创建github仓库，本地仓库与远程仓库建立连接


     登录github账号，新建一个repository（仓库），如下图所示：


      ![avatar](/readme-img/1.png)



      项目未创建：



          echo "# PERSONALDEMO" >> README.md
          git init
          git add README.md
          git commit -m "first commit"
          git remote add origin https://github.com/K-w1/wangyiyun-shop.git
          git push -u origin master


      项目已创建：


         git remote add origin https://github.com/K-w1/wangyiyun-shop.git
         git push -u origin master
  
  2. Webpack初始化Vue项目

  3. 搭建Vue路由

     + 注意导出router的时候需要使用export default而不是module.exports

  4. 下载reset.css

  5. sass学习
    
     + 定义sass全局变量还需要在webpack中安装配置 sass-resources-loader,这样才能在main.js中导入全局样式文件后再各个页面都能使用全局变量。又或者傻瓜式地在每个页面中@import公用样式文件

  6. 使用element-ui库，全局导入组件。如果要按需导入，需要修改.babelrc文件

  7. 阿里iconfont的svg-icon代码封装使用,以便使用彩色svg图标

  8. 导入swiper轮播,创建首页轮播banner

  9. 封装GoodsList组件

  10. 使用媒体查询@media来处理窗口大小变化时侧边导航栏的位置