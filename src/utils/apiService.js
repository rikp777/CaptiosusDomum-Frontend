import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios"

const API_URL = "http://127.0.0.1:7070/api"

const ApiService = {
    initialize(){
        Vue.use(VueAxios, axios);
    },

    query(resource, params) {
        return Vue.axios
            .get(`${resource}`, params)
            .catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)
            })
    },

    getByParam(resource, params = "") {
        return Vue.axios
            .get(`${resource}${param}`)
            .catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)
            })
    },

    get(resource, slug = "") {
        let uri = slug ? `${resource}/${slug}` : resource
        return Vue.axios
            .get(uri)
            .catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)
            })
    },

    post(resource, params) {
        return Vue.axios
            .post(`${resource}`, params)
            .then(()=>{
                console.log("post")
            }).catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)
            })
    },

    update(resource, slug, params) {
        return Vue.axios
            .put(`${resource}/${slug}`, params)
            .catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)
            })
    },

    put(resource, params) {
        return Vue.axios
            .put(`${resource}`, params)
            .catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)
            })
    },

    del(resource, slug) {
        console.log(resource + slug);
        return Vue.axios
            .delete(`${resource}/${slug}`)
            .catch(error => {
                errorMessage(`${resource} \n ${error.response.data.message}`)

            })
    },

    errorMessage(error) {
        throw `Backend: ${error}`
    }
};

export default ApiService;