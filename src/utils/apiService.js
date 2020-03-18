import axios from '../plugins/axios'

export function query(resource, params) {
    return axios
        .get(`${resource}`, params)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)
        })
}

export function getByParam(resource, params = "") {
    return axios
        .get(`${resource}${param}`)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)
        })
}

export function get(resource, slug = "") {
    let uri = slug ? `${resource}/${slug}` : resource
    return axios
        .get(uri)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)
        })
}

export function post(resource, params) {
    return axios
        .post(`${resource}/${slug}`, params)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)
        })
}

export function update(resource, slug, params) {
    return axios
        .put(`${resource}/${slug}`, params)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)
        })
}

export function put(resource, params) {
    return axios
        .put(`${resource}`, params)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)
        })
}

export function del(resource, slug) {
    return axios
        .delete(`${resource}/${slug}`)
        .catch(error => {
            errorMessage(`${resource} \n ${error.response.data.message}`)

        })
}

export function errorMessage(error) {
    throw `Backend: ${error}`
}

export default {
    query,
    getByParam,
    get,
    post,
    update,
    put,
    del
}

