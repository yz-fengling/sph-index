//home模块专享的小仓库
//任何的小仓库:state、mutations、actions、getters
//引入请求函数

//仓库存储数据的地方
const state = {
  b: 3
}

//唯一可以修改仓库数据地方【工人】
const mutations = {

}

//可以处理业务逻辑【if、异步语句等等】
const actions = {

}

//仓库计算属性
const getters = {}

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}