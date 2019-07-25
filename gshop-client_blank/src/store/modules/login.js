import {reqLogout,reqUserInfo} from '../../api'
import {RECEIVE_USER,LOGOUT} from '../mutation-types'

const state = {
userInfo:''
}

const mutations={
[RECEIVE_USER](state,data){
  state.userInfo=data
},
[LOGOUT](state){
  state.userInfo=''
}
}

const actions={
 async getuserInfo({commit}){
    const result =await reqUserInfo()
    if(result.code*1===0){
      commit(RECEIVE_USER,result.data)
    }
  },
  async logout({commit},callback){
    const result =await reqLogout()
    if(result.code*1===0){
      commit(LOGOUT)
      callback()
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
