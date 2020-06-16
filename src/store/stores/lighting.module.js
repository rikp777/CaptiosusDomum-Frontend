import {
  rooms as types, global
} from "./mutationTypes"
import ApiService from '../../utils/apiService'
import contexts from "less/lib/less/contexts";

const resourceUrl = "/lighting"

// Initial State
const state = {
  isLoading: true,
  error: null,
  lighting: {},
  lightings: [],
}
// Getters
const getters = {
  lightingIsLoading: state => state.isLoading,
  lightingError: state => state.error,
  lighting: state => state.lighting,
  lightings: state => state.lightings,
}
// Actions
const actions = {
  // get all Climates
  getAllLightings({commit}) {
    commit(global.FETCH_START)
    return ApiService.get(resourceUrl)
      .then(({data}) => {
        commit('setLightings', data)
        commit(global.FETCH_END)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // get Climate by slug id
  getLighting({commit}, slug) {
    if (state.climate.id === slug) {
      return;
    }

    commit(global.FETCH_START);
    return ApiService.getByParam(resourceUrl, slug)
      .then(({data}) => {
        commit('setLighting', data)
        commit(global.FETCH_END)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // Create Climate
  createLighting({commit}, payload) {
    return ApiService.post(resourceUrl, payload)
      .then(({data}) => {
        commit('setLighting', data)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // Update Climate
  updateLighting({commit}, payload) {
    ApiService.update(resourceUrl, payload.id, payload)
      .then(({data}) => {
        commit('setLighting', data)
      })
      .catch((error) => {
        commit(global.SET_ERROR, true)
        throw error
      })
  },

  // Delete Climate
  deleteLighting({commit}, slug) {
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
  setLighting(state, lighting) {
    state.lighting = lighting
  },
  setLightings(state, lightings) {
    state.lightings = lightings
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
