const state = {
    processing: false,
    error: null,
    thermostat: {},
    thermostats: {},
    thermostatCount: 0,
}

const getters = {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getThermostat: state => state.thermostat,
    getThermostats: state => state.thermostats,
    getThermostatCount: state => state.thermostat.length
}

const actions = {
    // get all thermostats
    async getAllThermostats({ commit }) {
        console.log("Action: " + types.FETCH_THERMOSTATS)
        commit(global.FETCH_START)
        try {
            const { data } = await ApiService.get(resourceUrl)

            commit(types.FETCH_THERMOSTATS, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_THERMOSTAT, error)
            commit(global.FETCH_END)
        }
    },

    // get thermostat by slug id
    async getThermostat({ commit }, slug) {
        console.log(`Action: ${types.FETCH_THERMOSTAT} ${slug} `)
        if (state.thermostat.uid === slug) {
            return;
        }

        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.getByParam(resourceUrl, slug)

            commit(types.FETCH_THERMOSTAT, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_THERMOSTAT_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // create thermostat
    async createThermostat({ commit }, payload) {
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.post(resourceUrl, payload)

            commit(types.FETCH_THERMOSTAT, data)
        } catch (error) {
            commit(types.FETCH_THERMOSTAT_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // update thermostat
    async updateThermostat({ commit }, payload) {
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.update(resourceUrl, payload.id, payload)

            commit(types.FETCH_THERMOSTAT, data)
        } catch (error) {
            commit(types.FETCH_THERMOSTAT_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // delete thermostat
    async deleteThermostat({ commit }, slug) {
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.del(slug)

            commit(types.FETCH_THERMOSTAT, data)
        } catch (error) {
            commit(types.FETCH_THERMOSTAT_FAILURE)
            commit(global.FETCH_END)
        }
    }
}

const mutations = {
    [global.FETCH_START](state) {
        state.processing = true;
    },
    [global.FETCH_END](state) {
        state.processing = false;
    },
    [types.FETCH_THERMOSTAT_FAILURE](state, error) {
        state.error = error
    },

    // types
    [types.FETCH_THERMOSTAT](state, thermostat) {
        state.thermostat = thermostat
    },
    [types.FETCH_THERMOSTATS](state, thermostat) {
        state.thermostat = thermostat
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}