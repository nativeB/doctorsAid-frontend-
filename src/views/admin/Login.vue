
<template>
  <div class = "container">
	<div class="wrapper">
		<form @submit.prevent="login" class="form-signin">       
		<h3 class="form-signin-heading">Welcome Back! Please Sign In</h3>
		<hr class="colorgraph"><br>
		<Input type="text" name="email" placeholder="Username" />
		<Input type="password"  name="password" placeholder="Password" />     		  	 
		<button class="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>  			
		</form>			
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import {serialise} from '../../assets/js/utils.js'
import Input from '../../components/Input'
export default {
  name: 'login',
  data(){
    return {
      user:'admin'
    }
  },
  components:{Input},
  methods:{
	login(e){
	/* eslint-disable no-console */
	
/* eslint-disable no-unused-vars */	
	const data = serialise(e.target)
	this['admin/login'](data).then(res=>{
		//if(res)this.$router.push({path:'/admin/login'})
	})
	},
	...mapActions([
		'admin/login'
	]),
	
  }
}
</script>

<style src="../../assets/css/loginAndSignup.css" scoped></style>
