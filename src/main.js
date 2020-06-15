import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/router'
import './assets/css/reset.css'
import './assets/css/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icons/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')