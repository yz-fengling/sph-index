//home模块专享的小仓库
//任何的小仓库:state、mutations、actions、getters
//引入请求函数
import { reqCategory } from '@/api'

//仓库存储数据的地方
const state = {
  //商品分类的数据,仓库里面数据起始数值不要瞎写【服务器返回的是啥】
  categoryList: []
}

//唯一可以修改仓库数据地方【工人】
const mutations = {
  GETCATEGORY(state, category) {
    console.log("a", category);
    state.categoryList = category
  }
}

//可以处理业务逻辑【if、异步语句等等】
const actions = {
  async categoryList({ commit, state, dispatch }) {
    //获取服务器的数据,存储在vuex仓库中
    //reqCategory函数执行,返回的是Promise对象【pending、成功、失败】
    //await 等待成功的结果
    let result = await reqCategory()
    if (result.code === 200) {
      //提交mutation存储服务器数据
      commit("GETCATEGORY", result.data)
    }
  }
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