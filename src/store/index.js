import Vue from 'vue'
import Vuex from 'vuex'

import room from './stores/room.module'
import device from './stores/device.module'
import climate from './stores/climate.module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // MODULES
  modules: {
    climate
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
