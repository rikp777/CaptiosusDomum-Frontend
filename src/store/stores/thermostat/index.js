
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  processing: false,
  error: null,
  thermostat: {},
  thermostats: {},
  thermostatCount: 0,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
