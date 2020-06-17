// import Vue from 'vue'
import VueRouter from 'vue-router'
// Vue.use(VueRouter)
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductDetail from '@/views/ProductDetail.vue'


const router=new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/product',
      component:Product
    },
    {
      path:'/product/detail',
      component:ProductDetail
    },
  ]
})

export default router