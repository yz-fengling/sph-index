<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <div class="swiper-container" ref="mySwiper">
          <!-- swiper-wrapper里面每一个slider即为一张图片 -->
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item) in bannerList" :key="item.id">
              <img :src="item.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//辅助函数获取仓库的数据
import { mapState } from 'vuex'
//swiper使用步骤:
//第一步:引入依赖包、样式
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'ListContainer',
  mounted() {
    //派发action,通知vuex发请求
    this.$store.dispatch('getReqBannerList')
    //下面这种写法:存在问题,定时器事件,没有办法去预估
    //Swiper在使用的时候注意:new Swiper类的实例之前,轮播图结构DOM,必须要完整!!!
    // setTimeout(() => {
    //   //初始化Swiper类的实例
    //   var mySwiper = new Swiper(this.$refs.mySwiper, {
    //     //设置轮播图防线
    //     direction: 'horizontal',
    //     //开启循环模式
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //       //分页器类型
    //       type: 'bullets',
    //       //点击分页器，切换轮播
    //       clickable: true
    //     },
    //     //自动轮播
    //     autoplay: {
    //       delay: 1000,
    //       //新版本的写法：目前是5版本
    //       // pauseOnMouseEnter: true,
    //       //如果设置为true，当切换到最后一个slide时停止自动切换
    //       stopOnLastSlide: true,
    //       //用户操作swiper之后，是否禁止autoplay
    //       disableOnInteraction: false
    //     },
    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev'
    //     }
    //     //切换效果
    //     // effect: "cube",
    //   })

    //   //1:swiper插件,对外暴露一个Swiper构造函数
    //   //2:Swiper构造函数需要传递参数 1、结构总根节点CSS选择器|根节点真实DOM节点  2、轮播图配置项
    //   //鼠标进入停止轮播
    //   mySwiper.el.onmouseover = function() {
    //     mySwiper.autoplay.stop()
    //   }
    //   //鼠标离开开始轮播
    //   mySwiper.el.onmouseout = function() {
    //     mySwiper.autoplay.start()
    //   }
    // }, 2000)
  },
  //计算属性
  computed: {
    //数组的写法:目前书写的是大仓库state的K  ...mapState(['home'])
    ...mapState({
      //对象写法,对象的K,给VC新增的属性
      //新增的属性erha,右侧属性值为箭头函数返回的结果。作为新增属性的属性值
      //箭头函数执行，注入一个参数state->大仓库【包含小仓库】
      bannerList: state => state.home.bannerList
    })
  },
  watch: {
    bannerList: {
      //能在这里直接初始化Swiper类的实例吗?
      //不能在当前状态直接初始化Swiper类的实例,因为这里只能保证数据发生变化了[服务器数据回来了],
      //但是你不能保证v-for遍历的结构完事了.
      immediate: true,
      handler() {
        this.$nextTick(() => {
          //初始化Swiper类的实例
          var mySwiper = new Swiper(
            document.querySelector('.swiper-container'),
            {
              //设置轮播图防线
              direction: 'horizontal',
              //开启循环模式
              loop: true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                //分页器类型
                type: 'bullets',
                //点击分页器，切换轮播
                clickable: true
              },
              //自动轮播
              autoplay: {
                delay: 2000,
                //新版本的写法：目前是5版本
                // pauseOnMouseEnter: true,
                //如果设置为true，当切换到最后一个slide时停止自动切换
                stopOnLastSlide: true,
                //用户操作swiper之后，是否禁止autoplay
                disableOnInteraction: false
              },
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
              //切换效果
              // effect: "cube",
            }
          )

          //1:swiper插件,对外暴露一个Swiper构造函数
          //2:Swiper构造函数需要传递参数 1、结构总根节点CSS选择器|根节点真实DOM节点  2、轮播图配置项
          //鼠标进入停止轮播
          mySwiper.el.onmouseover = function() {
            mySwiper.autoplay.stop()
          }
          //鼠标离开开始轮播
          mySwiper.el.onmouseout = function() {
            mySwiper.autoplay.start()
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(./images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>>