<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p>
              <!-- <span></span> -->
              <router-link to="/login">请登录</router-link>
              <router-link to="/register" class="register">免费注册</router-link>
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link to="/" class="logo" title="尚品汇">
            <img src="./images/logo.png" alt />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
            />
            <!-- 编程式导航:因为有业务 -->
            <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  data() {
    return {
      //收集用户输入的关键字
      keyword: ''
    }
  },
  mounted() {
    //清除关键字
    this.$bus.$on('clearKeyword', () => {
      console.log('删除面包屑中搜索关键子，clearKeyword事件被触发')
      this.keyword = ''
    })
  },
  methods: {
    goSearch() {
      //路由的跳转,采用的是编程式导航.
      //路由传递参数
      //第一种传递query参数
      // this.$router.push({ path: '/search', query: { keyword: this.keyword } })

      //第二种传递params参数 [一定要注意,面试的时候经常问]
      // this.$router.push({
      //   name: 'search',
      //   params: { keyword: this.keyword || undefined }
      // })
      //

      let locations = {
        name: 'search',
        params: { keyword: this.keyword || undefined }
      }
      //确定路径当中有query参数
      if (this.$route.query.categoryName) {
        locations.query = this.$route.query
      }
      //第三种传递query+params
      this.$router.push(locations)
    }
  }
}
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>