import {
    devices as types, global
} from "./mutationTypes"
import ApiService from '../../utils/apiService'

const resourceUrl = "/device"

// Initial State
const state = {
    processing: false,
    error: null,
    Device: {},
    Devices: {},
    DeviceCount: 0,
}
// Getters
const getters = {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getDevice: state => state.Device,
    getDevices: state => state.Devices,
    getDeviceCount: state => state.Devices.length
}

// Actions
const actions = {
    // get all Devices
    async getAllDevices({commit} ){
        console.log("Action: " + types.FETCH_DEVICES)
        commit(global.FETCH_START)
        try {
            const { data } = await ApiService.get(resourceUrl)

            commit(types.FETCH_DEVICES, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_DEVICE, error)
            commit(global.FETCH_END)
        }
    },

    // get Device by slug id
    async getDevice({commit}, slug){
        console.log(`Action: ${types.FETCH_DEVICE} ${slug} `)
        if(state.Device.uid === slug){
            return;
        }

        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.getByParam(resourceUrl, slug)

            commit(types.FETCH_DEVICE, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_DEVICE_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // create Device
    createDevice({commit}, payload){
        return ApiService.post(apiUrl, payload)
        .then(({data}) => {
            commit(types.FETCH_DEVICE, data)
        })
        .catch((error) => {
            throw error
        })
    },

    // update Device
    async updateDevice({commit}, payload){
        return ApiService.update(apiUrl, payload.id, payload)
        .then(({data}) => {
            commit(types.FETCH_DEVICE, data)
        })
        .catch((error) => {
            throw error
        })
    },

    // delete Device
    async deleteDevice({commit}, slug){
        return ApiService.del(apiUrl, slug.Deviceid)
        .then(({data}) => {
            commit(types.FETCH_DEVICE, data)
        })
        .catch((error) => {
            throw error
        })
    }
}

// Mutations
const mutations = {
    [global.FETCH_START](state) {
        state.processing = true;
    },
    [global.FETCH_END](state) {
        state.processing = false;
    },
    [types.FETCH_DEVICE_FAILURE](state, error) {
        state.error = error
    },

    // types
    [types.FETCH_DEVICE](state, Device) {
        state.Device = Device
    },
    [types.FETCH_DEVICES](state, Device) {
        state.Device = Device
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}
