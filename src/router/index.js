import Vue from "vue";
import VueRouter from "vue-router";
import LoginAdmin from "../views/admin/Login.vue";
import SignupAdmin from "../views/admin/Signup.vue";
import LoginPatient from "../views/patient/Login.vue";
import SignupPatient from "../views/patient/Signup.vue";
import DashboardPatient from "../views/patient/Dashboard.vue";
import DashboardAdmin from "../views/admin/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "patientsdashboard",
    component: DashboardPatient
  },
  {
    path: "/admin/login",
    name: "adminlogin",
    component: LoginAdmin
  },
  {
    path: "/admin/dashboard",
    name: "adminDashboard",
    component: DashboardAdmin
  },
  {
    path: "/admin/signup",
    name: "adminsignup",
    component: SignupAdmin
  },
  {
    path: "/patient/signup",
    name: "patientsignup",

    component: SignupPatient
  },
  {
    path: "/patient/login",
    name: "patientslogin",
    component: LoginPatient
  }
  // {
  //   path: '/patient/dashboard',
  //   name: 'patientsdashboard',
  //   component: DashboardPatient
  // }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
