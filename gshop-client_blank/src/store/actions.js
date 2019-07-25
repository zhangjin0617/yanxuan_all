import {RECEIVE_HOMEDATA} from './mutation-types'
import {reqHomeData}from '../api'
export default{
    async getHomeData({commit}){
       const result =await reqHomeData()
       if(result.code===0){
         commit(RECEIVE_HOMEDATA,result.data)
       }
     }

}
