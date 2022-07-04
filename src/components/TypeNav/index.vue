<template>
  <div class="type-nav">
    <!-- 事件的委派 -->
    <div class="container" @mouseleave="leaveHandler">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort">
        <div class="all-sort-list2">
          <!--一级分类-->
          <div
            class="item"
            v-for="(c1,index) in categoryList"
            :key="c1.categoryId"
            :class="{active:currentIndex == index}"
          >
            <h3 @mouseenter="enterHandler(index)">
              <a href>{{c1.categoryName}}</a>
            </h3>
            <!-- 通过JS实现动态行内样式，进行二级、三级分类的显示与隐藏(display:none|block切换的) -->
            <div
              class="item-list clearfix"
              :style="{display:currentIndex == index ? 'block':'none'}"
            >
              <!--二级分类-->
              <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                <dl class="fore">
                  <dt>
                    <a href>{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <!--三级分类-->
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href>{{c3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TypeNav',
  data() {
    return {
      //利用响应式属性,将来存储用户鼠标进入哪一个一级分类的索引值
      currentIndex: -1
    }
  },
  methods: {
    enterHandler(index) {
      //修改响应式数据
      this.currentIndex = index
      //鼠标进入事件,假如用户的行为过快,会导致项目业务丢失【里面业务有很多，可能出现卡顿现象】。
      //一句话：用户行为过快,浏览器反应不过来,导致业务丢失!!!!
      //函数的防抖与节流技术
      // console.log("处理业务" + index);
    },
    //鼠标移出事件
    leaveHandler() {
      //鼠标移出高亮的效果消失
      this.currentIndex = -1
    }
  },
  //组件挂载完毕,可以向服务器发请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch('categoryList')
  },
  computed: {
    ...mapState({
      //对象写法,对象的K,给VC新增的属性
      //新增的属性erha,右侧属性值为箭头函数返回的结果。作为新增属性的属性值
      //箭头函数执行，注入一个参数state->大仓库【包含小仓库】
      categoryList: state => state.home.categoryList //对象简写形式
    })
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          /*温馨提示:豪哥不想利用样式控制二级、三级分类显示与隐藏,下面的代码进行注释*/
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .active {
          background: turquoise;
        }
      }
    }
  }
}
</style>>
</style>