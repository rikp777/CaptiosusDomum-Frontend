export default {
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
    async createRoom({commit}, payload){
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.post(resourceUrl, payload)

            commit(types.FETCH_Room, data)
        } catch(error){
            commit(types.FETCH_Room_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // update Room
    async updateRoom({commit}, payload){
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.update(resourceUrl, payload.id, payload)

            commit(types.FETCH_Room, data)
        } catch(error){
            commit(types.FETCH_Room_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // delete Room
    async deleteRoom({commit}, slug){
        commit(global.FETCH_START);
        try{
            const { data } = await ApiService.del(slug)

            commit(types.FETCH_Room, data)
        } catch (error) {
            commit(types.FETCH_Room_FAILURE)
            commit(global.FETCH_END)
        }
    }
}