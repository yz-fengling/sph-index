import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//注册三级目录为全局组件
import TypeNav from '@/components/TypeNav'
import store from './store'

//引入mockServe文件,让咱们模拟接口跑起来
import '@/mock/mockService'

//轮播图全局组件
import Carousel from '@/components/Carousel'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.config.productionTip = false

new Vue({
  //下面代码作用:给项目添加路由功能,给全部VC实例身上拥有两个属性,$router|$route
  router,
  //下面的代码作用:给项目添加仓库功能,主要的作用是给全部VC拥有一个$store属性
  store,
  render: h => h(App),
}).$mount('#app')
