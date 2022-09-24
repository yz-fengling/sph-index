//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)

import routes from './routes'

//当前版本的vue-router:3.5.2 在使用编程式导航中用push传递参数给子组件会有报错的问题，以下是解决办法

//VueRouter.prototype原型对象添加一个方法
//location:路由跳转相关的信息
//将原有的push方法进行保存
let vueRouterPush = VueRouter.prototype.push

let vueRouterReplace = VueRouter.prototype.replace

//更改VueRouter.prototype原型对象的push即可解决
VueRouter.prototype.push = function (location, resolve, reject) {
  //当前函数this：即为VueRouter类的实例
  //相当于push方法里面this，是windows【完犊子了】
  //利用人家push方法实现路由跳转，保证push里面this,应该vueRouter类的实例

  //面试:函数apply与call区别?
  //相同的地方:都可以篡改函数里面this
  //不同的地方:apply传递参数 数组  call传递参数 逗号分割
  // console.log(location, resolve, reject);
  if (resolve && reject) {
    vueRouterPush.call(this, location, resolve, reject)
  } else {
    vueRouterPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    //代表真:代表着两个形参接受参数【箭头函数】
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

//配置路由
export default new VueRouter({
  //配置路由
  routes: routes
})
