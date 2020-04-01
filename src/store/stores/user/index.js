import { users as types, global } from '../mutationTypes'
import ApiService from '../../utils/apiService'

const resourceUrl = 'user'

const state = {
    processing: false,
    error: null,
    user: {},
    users: [],
    userCount: 0
}

export default {
    state,
    getters,
    mutations,
    actions
}