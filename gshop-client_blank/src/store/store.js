import Vue from 'vue'
import Vuex,{Store} from 'vuex'
// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
import home from './modules/home'
import category from './modules/category'
import search from './modules/search'
import login from './modules/login'
import find from './modules/find'

Vue.use(Vuex)

export default new Store({
  // state,
  // mutations,
  // actions,
  // getters,
  modules:{
    home,
    category,
    search,
    login,
    find
  }
})
