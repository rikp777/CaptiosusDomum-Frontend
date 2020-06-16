import {
  devices as types, global
} from "./mutationTypes"
import ApiService from '../../utils/apiService'

const resourceUrl = "/user"

// Initial State
const state = {
    processing: false,
    error: null,
    user: {},
    users: [],
    userCount: 0
}
// Getters
const getters = {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getUser: state => state.user,
    getUsers: state => state.users,

    getUserCount: state => state.users.length,

    getUserByUid: state => (uid) => {
        return state.users.find(user => user.uid === uid)
    }
}
// Actions
const actions = {
    // get all users
    async getAllUsers({ commit }) {
        console.log("Action: " + types.FETCH_USERS)
        commit(global.FETCH_START)
        try {
            const { data } = await ApiService.get(resourceUrl)

            commit(types.FETCH_USERS, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_USER, { error: error })
            commit(global.FETCH_END)
        }
    },

    // get role by slug id
    async getUser({ commit }, slug) {
        console.log(`Action: ${types.FETCH_USER} ${slug} `)
        if (state.user.uid === slug) {
            return;
        }

        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.getByParam(resourceUrl, slug)

            commit(types.FETCH_USER, { user: data })
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_USER_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // create user
    async createUser({ commit }, payload) {
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.post(resourceUrl, payload)

            commit(types.FETCH_USER, { user: data })
        } catch (error) {
            commit(types.FETCH_USER_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // update user
    async updateUser({ commit }, payload) {
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.update(resourceUrl, payload.id, payload)

            commit(types.FETCH_USER, { user: data })
        } catch (error) {
            commit(types.FETCH_USER_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // delete user
    async deleteUser({ commit }, slug) {
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.del(slug)

            commit(types.FETCH_USER, { user: data })
        } catch (error) {
            commit(types.FETCH_USER_FAILURE)
            commit(global.FETCH_END)
        }
    }
}
// Mutations
const mutations = {
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

export default {
    state,
    getters,
    actions,
    mutations
}
