import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state){
      state.count++
    },
    reduce(state,num){
      state.count-=num
    }
  },
  getters:{
    count2(state){
      return state.count2 = state.count + 10
    }
  },
  actions: {
    actionadd({commit}){
      commit('add')
    }
  }
})
