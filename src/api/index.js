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