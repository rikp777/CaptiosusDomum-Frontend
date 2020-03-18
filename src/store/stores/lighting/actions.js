export default {
    // get all lightings
    async getAllLightings({commit} ){
        console.log("Action: " + types.FETCH_LIGHTINGS)
        commit(global.FETCH_START)
        try {
            const { data } = await ApiService.get(resourceUrl)

            commit(types.FETCH_LIGHTINGS, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_LIGHTING, error)
            commit(global.FETCH_END)
        }
    },

    // get lighting by slug id
    async getLighting({commit}, slug){
        console.log(`Action: ${types.FETCH_LIGHTING} ${slug} `)
        if(state.lighting.uid === slug){
            return;
        }

        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.getByParam(resourceUrl, slug)

            commit(types.FETCH_LIGHTING, data)
            commit(global.FETCH_END)
        } catch (error) {
            commit(types.FETCH_LIGHTING_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // create lighting
    async createLighting({commit}, payload){
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.post(resourceUrl, payload)

            commit(types.FETCH_LIGHTING, data)
        } catch(error){
            commit(types.FETCH_LIGHTING_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // update lighting
    async updateLighting({commit}, payload){
        commit(global.FETCH_START);
        try {
            const { data } = await ApiService.update(resourceUrl, payload.id, payload)

            commit(types.FETCH_LIGHTING, data)
        } catch(error){
            commit(types.FETCH_LIGHTING_FAILURE)
            commit(global.FETCH_END)
        }
    },

    // delete lighting
    async deleteLighting({commit}, slug){
        commit(global.FETCH_START);
        try{
            const { data } = await ApiService.del(slug)

            commit(types.FETCH_LIGHTING, data)
        } catch (error) {
            commit(types.FETCH_LIGHTING_FAILURE)
            commit(global.FETCH_END)
        }
    }
}