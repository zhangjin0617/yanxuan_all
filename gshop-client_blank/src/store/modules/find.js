import {reqThingsData,reqThingsNav} from '../../api'
import {RECEIVE_THINGSDATA,RECEIVE_THINGSNAV} from '../mutation-types'

const state = {
  thingsNav:[],
  thingsData:[]
}

const mutations={
[RECEIVE_THINGSNAV](state,data){
  state.thingsNav=data
},
[RECEIVE_THINGSDATA](state,data){
  state.thingsData=data
}
}

const actions={
 async getthingsNav({commit},callback){
    const result =await reqThingsNav()
    if(result.code*1===200){
      commit(RECEIVE_THINGSNAV,result.data)
      callback()
    }
  },
  async getthingsData({commit}){
    const result =await reqThingsData()
    if(result.code*1===200){
      commit(RECEIVE_THINGSDATA,result.data)
    }
  }
}

const getters={

}

export default{
  state,
  mutations,
  actions,
  getters
}
