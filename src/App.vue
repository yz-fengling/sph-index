<template>
  <div id="app" class="outer">
    <!-- 头部 -->
    <Header></Header>
    <!-- 路由组件出口的位置:不设置路由组件不知道在哪里显示 -->
    <router-view></router-view>
    <!-- 底部，登录和注册页面不显示页脚，此属性定义在路由配置中 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
