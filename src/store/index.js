import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// Vue.config.devtools = true
import home from './Home'
import search from './Search'
//对外暴露仓库
//第一个注意:需要关键字new，你没有new会报错的
//第二个注意:Store构造函数,书写的时候别小写
export default new Vuex.Store({
  //大仓库需要注册全部小仓库
  //vuex新增的一个配置项:模块式开发.右侧V也是对象
  modules: {
    home,
    search
  }
})