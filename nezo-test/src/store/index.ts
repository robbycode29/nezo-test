import { createStore } from 'vuex'
import charts from '@/store/charts'
import orders from '@/store/orders'

export default createStore({
  state: {
    currentTab: 0,
  },
  getters: {
    getCurrentTab(state) {
      return state.currentTab;
    },
  },
  mutations: {
    setCurrentTab(state, newTab) {
      state.currentTab = newTab;
    },
  },
  actions: {
    setTab({ commit }, newTab) {
      commit('setCurrentTab', newTab);
    },
  },
  modules: {
    charts,
    orders,
  }
})
