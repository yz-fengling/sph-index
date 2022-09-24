import { reqDetailList, reqAddOrUpdateCart } from '@/api'
//任何的小仓库:state、mutations、actions、getters
//引入请求函数
const state = {
  //商品详情的数据
  detailInfo: {}
}

//唯一可以修改仓库数据地方【工人】
const mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo
  },
}

//可以处理业务逻辑【if、异步语句等等】
const actions = {
  async getDetailInfo({ state, commit, dispatch }, skuId) {
    console.log("根据商品id，获取商品详情数据", skuId);
    //商品详情请求，需要携带商品ID
    const result = await reqDetailList(skuId)
    if (result.code == 200) {
      console.log("商品详情数据", result);
      commit('GETDETAILINFO', result.data)
    }
  },
  //添加商品到购物车
  async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
    console.log("根据商品skuId、商品数量skuNum，加入到用户购物车", skuId, skuNum);
    const result = await reqAddOrUpdateCart(skuId, skuNum)
    if (result.code == 200) {
      //如果加入购物车成功,返回promise即为成功
      return 'ok';
    } else {
      //如果加入购物车失败，返回失败的Promise
      return Promise.reject();
    }
  }
  //思考问题:目的是前端把商品的ID、商品个数传递给服务器【人家服务器，兄弟我收到了,没有额外的给你传递其余的数据】
  //想的问题:豪哥不对，咱们以前经常commit条件mutation存储数据【没有返回数据，没有数据可存储】,没有需要提交mutation让仓库
  //存储数据
  //第一种解决方案code,完全可以！！！！
}

//仓库计算属性
const getters = {
  categoryView(state) {
    //研究这个问题:
    //起始状态:state.detailInfo起始状态空对象,空对象.categoryView->undefined
    //当服务器数据回来之后state.detailInfo,并非空对象,获取的即为服务器返回的数据{7个K}
    //当前属性值:服务器的数据有值，用服务器的。服务器数据没有回来至少有一个空对象兜底【不能undefined兜底】
    return state.detailInfo.categoryView || {}
  },
  //商品信息的数据
  skuInfo(state) {
    return state.detailInfo.skuInfo || {}
  },
  //商品销售属性列表的数据
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || []
  }

}

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}