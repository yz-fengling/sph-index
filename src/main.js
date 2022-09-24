import Vue from 'vue'
import App from './App.vue'

//===========全局组件=================
//注册三级目录为全局组件
import TypeNav from '@/components/TypeNav'
//轮播图全局组件
import Carousel from '@/components/Carousel'
//分页全局组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

//===========路由=====================
//引入路由
import router from '@/router'
import store from './store'

//引入mockServe文件,让咱们模拟接口跑起来
import '@/mock/mockService'


Vue.config.productionTip = false

//将项目全部请求函数引入进来[分别暴露]
import * as http from '@/api';

new Vue({
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //通过Vue.prototype原型对象,将全部请求函数挂载到原型对象身上[VC:就可以使用请求函数]
    Vue.prototype.$http = http;
  },
  //下面代码作用:给项目添加路由功能,给全部VC实例身上拥有两个属性,$router|$route
  router,
  //下面的代码作用:给项目添加仓库功能,主要的作用是给全部VC拥有一个$store属性
  store,
  render: h => h(App),
}).$mount('#app')
