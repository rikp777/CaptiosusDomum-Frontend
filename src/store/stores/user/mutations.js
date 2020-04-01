export default {
    // globals
    [global.FETCH_START](state) {
        state.processing = true;
    },
    [global.FETCH_END](state) {
        state.processing = false;
    },
    [types.FETCH_USER_FAILURE](state, error) {
        state.error = error
    },

    // types
    [types.FETCH_USER](state, user) {
        state.user = user
    },
    [types.FETCH_USERS](state, users) {
        state.users = users
    }
}