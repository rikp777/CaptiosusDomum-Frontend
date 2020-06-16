import {
  rooms as types, global
} from "./mutationTypes"
import ApiService from '../../utils/apiService'
import contexts from "less/lib/less/contexts";

const resourceUrl = "/climate"

// Initial State
const state = {
  isLoading: true,
  error: null,
  climate: {},
  climates: [],
}
// Getters
const getters = {
  climateIsLoading: state => state.isLoading,
  climateError: state => state.error,
  climate: state => state.climate,
  climates: state => state.climates,
}
// Actions
const actions = {
  // get all Climates
  getAllClimates({commit}) {
    commit(global.FETCH_START)
    return ApiService.get(resourceUrl)
      .then(({data}) => {
        commit('setClimates', data)
        commit(global.FETCH_END)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // get Climate by slug id
  getClimate({commit}, slug) {
    if (state.climate.id === slug) {
      return;
    }

    commit(global.FETCH_START);
    return ApiService.getByParam(resourceUrl, slug)
      .then(({data}) => {
        commit('setClimate', data)
        commit(global.FETCH_END)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // Create Climate
  createClimate({commit}, payload) {
    return ApiService.post(resourceUrl, payload)
      .then(({data}) => {
        commit('setClimate', data)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // Update Climate
  updateClimate({commit}, payload) {
    ApiService.update(resourceUrl, payload.id, payload)
      .then(({data}) => {
        commit('setClimate', data)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // Delete Climate
  deleteClimate({commit}, slug) {
    return ApiService.del(resourceUrl, slug)
      .then(() => {
        alert('Deleted successfully')
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  }
}
// Mutations
const mutations = {
  [global.FETCH_START](state) {
    state.error = false;
    state.isLoading = true;
  },
  [global.FETCH_END](state) {
    state.isLoading = false;
  },
  [global.SET_ERROR](state, error) {
    state.error = error
  },

  // types
  setClimate(state, climate) {
    state.climate = climate
  },
  setClimates(state, climates) {
    state.climates = climates
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
