import Vue from 'vue'
import Vuex from 'vuex'

import room from './stores/room.module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // MODULES
  modules: {
    room
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
