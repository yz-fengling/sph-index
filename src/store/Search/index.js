//home模块专享的小仓库
//任何的小仓库:state、mutations、actions、getters
//引入请求函数

import { reqSearchList } from "@/api"

//仓库存储数据的地方
const state = {
  //搜索模块返回的数据
  searchList: {}
}

//唯一可以修改仓库数据地方【工人】
const mutations = {
  GETSEARCHLIST(state, searchList) {
    console.log("获取search页面商品、列表等数据", searchList);
    state.searchList = searchList
  }
}

//可以处理业务逻辑【if、异步语句等等】
const actions = {
  async getSearchList({ state, dispatch, commit }, searchParams) {
    let result = await reqSearchList(searchParams)
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
}

//getters:仓库的计算属性
//项目中:vuex的getters,为了简化数据而生。
const getters = {
  //计算新的属性:state,当前小仓库的数据
  goodsList(state) {
    return state.searchList.goodsList || {}
  },
  //品牌的数据
  trademarkList(state) {
    return state.searchList.trademarkList || {}
  },
  //商品属性
  attrsList(state) {
    return state.searchList.attrsList || {}
  }
}

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}