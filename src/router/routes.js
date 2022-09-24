//引用路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'

export default [
  {
    path: '/home',
    component: Home,
    //用于此路由是否显示页脚
    meta: {
      show: true
    }
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      show: false
    }
  },
  {
    path: '/detail/:skuId?',
    name: 'detail',
    component: Detail,
    //路由元信息,控制当前路由是否需要Footer组件
    meta: { show: true },
  },
  {
    path: '/addcartsuccess',
    name: 'AddCartSuccess',
    component: AddCartSuccess,
    //路由元信息,控制当前路由是否需要Footer组件
    meta: { show: true },
  },
  //重定向
  {
    path: "/",
    redirect: '/home'
  }
]