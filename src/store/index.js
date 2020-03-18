import Vue from 'vue'
import Vuex from 'vuex'

import Setting from './stores/setting'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // MODULES
  modules: {
    Setting
  },
  // GLOBAL
  state: {
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  // DEBUG MODE
  strict: debug
})
