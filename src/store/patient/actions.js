/* eslint-disable no-unused-vars */

import Vue from "vue";
import router from "@/router/index.js";
export const login = ({ commit }, data) => {
  return Vue.axios
    .post("/patient/login", data)
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("setPatient", data.data);
        return data;
      } else return false;
    })
    .catch(() => {
      router.push({ path: "patient/login" });
    });
};
export const signup = ({ commit }, data) => {
  return Vue.axios
    .post("/patient/signup", data)
    .then(res => {
      const { data } = res;
      if (data.success) {
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "patient/login" });
    });
};
export const fetchIssues = ({ commit }) => {
  return Vue.axios
    .get(`/patient/issue`)
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("setIssues", data.data);
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "patient/login" });
    });
};
export const fetchPatient = ({ state, dispatch, commit }) => {
  return Vue.axios
    .get("/patient")
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("setPatient", data.data);
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "patient/login" });
    });
};
export const createIssue = ({ state, dispatch, commit }, data) => {
  return Vue.axios
    .post("/patient/issue", data)
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("setIssue", data.data);
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "patient/login" });
    });
};
export const markResolved = ({ commit }, data) => {
  return Vue.axios
    .put(`/patient/issue/${data._id}`, data.issue)
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("updateIssue", data.data);
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "patient/login" });
    });
};
