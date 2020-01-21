import Vue from "vue";
import Vuex from "vuex";
import admin from "./admin";
import patient from "./patient";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    admin,
    patient
  }
});
