<template>
  <div class="container">
    <div class="wrapper">
      <form @submit.prevent="signup" class="form-signin">
        <h3 class="form-signin-heading">Welcome patient, Please Sign Up</h3>
        <hr class="colorgraph" />
        <br />
        <Input type="text" name="firstName" placeholder="First Name" />
        <Input type="text" name="lastName" placeholder="Last Name" />
        <Input type="text" name="email" placeholder="Email" />
        <Input type="tel" name="number" placeholder="Phone Number" />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
        <button
          class="btn btn-lg btn-primary btn-block"
          name="Submit"
          value="Login"
          type="Submit"
        >
          Signup
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { serialise } from "../../assets/js/utils.js";
import Input from "../../components/Input";
export default {
  name: "login",
  components: { Input },
  data() {
    return {
      user: "patient"
    };
  },
  methods: {
    signup(e) {
      /* eslint-disable no-console */

      /* eslint-disable no-unused-vars */

      const data = serialise(e.target);
      this["patient/signup"](data)
        .then(res => {
          if (res) this.$router.push({ path: "/patient/login" });
        })
        .catch(e => {
          this.$router.push({ path: "/patient/signup" });
        });
    },
    ...mapActions(["patient/signup"])
  }
};
</script>

<style src="../../assets/css/loginAndSignup.css" scoped></style>
