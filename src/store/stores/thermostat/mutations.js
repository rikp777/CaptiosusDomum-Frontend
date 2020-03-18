export default {
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