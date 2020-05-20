import {
    rooms as types, global
} from "./mutationTypes"
import ApiService from '../../utils/apiService'

const apiUrl = "/room"
// Initial State
const state = {
    processing: false,
    error: null,
    room: {},
    rooms: {},
    roomCount: 0,
}

const getters = {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getRoom: state => state.room,
    getRooms: state => state.rooms,
    getroomCount: state => state.rooms.length
}

const actions = {
    // get all Rooms
    async getAllRooms({commit} ){
        console.log("Action: " + types.FETCH_RoomS)
        commit(global.FETCH_START)
        try {
            const { data } = await ApiService.get(resourceUrl)

            commit(types.FETCH_RoomS, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_Room, error)
            commit(global.FETCH_END)
        }
    },

    // get Room by slug id
    async getRoom({commit}, slug){
        console.log(`Action: ${types.FETCH_Room} ${slug} `)
        if(state.Room.uid === slug){
            return;
        }

        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.getByParam(resourceUrl, slug)

            commit(types.FETCH_Room, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_Room_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // create Room
    createRoom({commit}, payload){
        return ApiService.post(apiUrl, payload)
        .then(({data}) => {
            commit(types.FETCH_ROOM, data)
        })
        .catch((error) => {
            throw error
        })
    },

    // update Room
    async updateRoom({commit}, payload){
        return ApiService.update(apiUrl, payload.id, payload)
        .then(({data}) => {
            commit(types.FETCH_ROOM, data)
        })
        .catch((error) => {
            throw error
        })
    },

    // delete Room
    async deleteRoom({commit}, slug){
        return ApiService.del(apiUrl, slug.roomid)
        .then(({data}) => {
            commit(types.FETCH_ROOM, data)
        })
        .catch((error) => {
            throw error
        })
    }
}

const mutations = {
    [global.FETCH_START](state) {
        state.processing = true;
    },
    [global.FETCH_END](state) {
        state.processing = false;
    },
    [types.FETCH_ROOM_FAILURE](state, error) {
        state.error = error
    },

    // types
    [types.FETCH_ROOM](state, room) {
        state.room = room
    },
    [types.FETCH_ROOMS](state, room) {
        state.room = room
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}