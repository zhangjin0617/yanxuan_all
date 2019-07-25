import Mock from 'mockjs'
import homeData from './homeData.json'
import categoryData from './category.json'
import categoryListData from './categoryList.json'


Mock.mock('/homeData',{
  code:0,
  data:homeData
})
Mock.mock('/category',{
  code:0,
  data:categoryData
})
Mock.mock('/categoryList',{
  code:0,
  data:categoryListData
})
console.log('启动了')