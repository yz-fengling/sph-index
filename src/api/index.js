//统一管理项目前部的接口
import requests from "./requests";
import mockRequests from "./mockRequests";

//封装函数:复用
//将来这个函数可以在别的地方使用,需要对外暴露【分别暴露】
//获取商品分类的数据
export const reqCategory = () => {
  return requests({ method: 'get', url: '/product/getBaseCategoryList' })
}

//获取首页轮播图数据的接口
export const reqBannerList = () => {
  return mockRequests({ method: 'get', url: '/banner' })
}

//获取Floor数据接口
export const reqFloorList = () => mockRequests({
  method: 'get', url: '/floor'
})

//搜索模块的请求接口函数:
//将来根据不同的搜索条件,需要给服务器携带不同的参数
//请求体携带搜索的参数
//搜索的条件:它应该是一个对象10K,可有可无，但是data至少是一个空对象
//没有发现:
//第一步:整理搜索的参数
//第二步：根据最新的搜索参数，获取最新的数据展示!!
export const reqSearchList = (data) => requests({
  url: '/list', method: 'post', data: data
})