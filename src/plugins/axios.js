"use strict";

import Vue from "vue";
import axios from "axios";
import router from "@/router/index.js";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// const token = localStorage.getItem('token')
// if(!token) router.push({path:'patient/login'})

axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
  baseURL: process.env.VUE_APP_BASEURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    const { status } = error.response;
    if (status === 500 || status === 401) {
      console.log(error.response);
      router.push({ path: "/" });
    } else {
      return Promise.reject(error);
    }
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);
export default Plugin;
