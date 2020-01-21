/* eslint-disable no-unused-vars */

import Vue from "vue";
import router from "@/router/index.js";
export const login = ({ commit }, data) => {
  return Vue.axios
    .post("/admin/login", data)
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("setAdmin", data.data);
        return data;
      } else return false;
    })
    .catch(() => {
      router.push({ path: "admin/login" });
    });
};
export const signup = ({ commit }, data) => {
  return Vue.axios
    .post("/admin/signup", data)
    .then(res => {
      const { data } = res;
      if (data.success) {
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "admin/login" });
    });
};
export const fetchIssues = ({ commit }) => {
  return Vue.axios
    .get(`/admin/issues`)
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
      router.push({ path: "admin/login" });
    });
};
export const fetchAdmin = ({ state, dispatch, commit }) => {
  return Vue.axios
    .get("/admin")
    .then(res => {
      const { data } = res;
      if (data.success) {
        commit("setAdmin", data.data);
        return data;
      } else {
        return false;
      }
    })
    .catch(() => {
      router.push({ path: "admin/login" });
    });
};
export const respondIssue = ({ state, dispatch, commit }, data) => {
  return Vue.axios
    .put(`/admin/issues/${data._id}`, data.issue)
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
      router.push({ path: "admin/login" });
    });
};
