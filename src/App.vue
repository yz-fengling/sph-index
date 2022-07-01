<template>
  <div id="app" class="outer">
    <!-- 头部 -->
    <Header></Header>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header/index'
import Footer from './components/footer/index'
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
