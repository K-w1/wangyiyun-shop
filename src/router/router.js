// import Vue from 'vue'
import VueRouter from 'vue-router'
// Vue.use(VueRouter)
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import My from '@/views/My/My.vue'
import Order from '@/views/My/Order.vue'
import OrderDetail from '@/views/My/OrderDetail.vue'
import Coupon from '@/views/My/Coupon.vue'
import Address from '@/views/My/Address.vue'
import Cart from '@/views/Cart.vue'


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
    {
      path:'/my',
      component:My,
      children:[
        {
          path:'/',
          redirect:'order'
        },
        {
          path:'order',
          component:Order
        },
        {
          path:'coupon',
          component:Coupon
        },
        {
          path:'address',
          component:Address
        }
      ]
    },
    {
      path:'/my/order/detail',
      component:OrderDetail
    },
    {
      path:'/cart',
      component:Cart
    }
  ]
})

export default router