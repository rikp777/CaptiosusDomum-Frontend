import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios"

const API_URL = "http://127.0.0.1:7070/api"

const ApiService = {
  initialize() {
    Vue.use(VueAxios, axios);
  },

  query(resource, params) {
    return Vue.axios
      .get(`${resource}`, params)
      .catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  getByParam(resource, params = "") {
    return Vue.axios
      .get(`${resource}${param}`)
      .catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  get(resource, slug = "") {
    let uri = slug ? `${resource}/${slug}` : resource
    return Vue.axios
      .get(uri)
      .catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  post(resource, params) {
    return Vue.axios
      .post(`${resource}`, params)
      .then(() => {
        console.log("post")
      }).catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  update(resource, slug, params) {
    return Vue.axios
      .put(`${resource}/${slug}`, params)
      .catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  put(resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
      .catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  del(resource, slug) {
    console.log(resource + slug);
    return Vue.axios
      .delete(`${resource}/${slug}`)
      .catch(error => {
        this.errorMessage(`${resource} \n ${error}`)
      })
  },

  errorMessage(error) {
    throw `Backend: ${error}`
  }
};

export default ApiService;
