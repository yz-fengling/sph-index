<template>
  <div>
    <!-- 首页路由组件 -->
    <!--全局组件 商品分类导航 -->
    <TypeNav />
    <!-- 列表 -->
    <ListContainer></ListContainer>
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <!-- 
       Floor标签,通过v-for动态生成
       父子组件通信:props

       问题:VC[Home]身上的floorList这个属性的属性值有几种情况?

       仓库floorList:起始值 空数组
       仓库floorList:不是空数组,代表服务器数据回来了。v-for渲染子组件完毕。给组件的props,就是两个对象
    
    -->
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: status => status.home.floorList
    })
  }
}
</script>

<style>
</style>