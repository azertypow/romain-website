import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store<IStoreInterface>({
  state: {
    fullPageInstance: null
  },
  mutations: {
    setFullPageInstance(state, value) {
      state.fullPageInstance = value
    }
  },
  actions: {
  }
})

export interface IStoreInterface {
  fullPageInstance: any | null
}
