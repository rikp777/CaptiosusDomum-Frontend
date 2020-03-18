export default {
    [global.FETCH_START](state) {
        state.processing = true;
    },
    [global.FETCH_END](state) {
        state.processing = false;
    },
    [types.FETCH_LIGHTING_FAILURE](state, error) {
        state.error = error
    },

    // types
    [types.FETCH_LIGHTING](state, lighting) {
        state.lighting = lighting
    },
    [types.FETCH_LIGHTINGS](state, lightings) {
        state.lightings = lightings
    }
}