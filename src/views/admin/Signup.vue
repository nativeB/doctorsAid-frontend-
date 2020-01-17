
<template>
  <div class = "container">
	<div class="wrapper">
		<form @submit.prevent="signup" class="form-signin">       
		<h3 class="form-signin-heading">Welcome,{{user}} Please Sign In</h3>
		<hr class="colorgraph"><br>
		<Input type="text" name="title" placeholder="Title" />
		<Input type="text" name="firstName" placeholder="First Name" />
		<Input type="text" name="lastName" placeholder="Last Name" />
		<Input type="text" name="email" placeholder="Email" />
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
  components:{Input},
  data(){
    return {
      user:'admin'
    }
  },
  methods:{
	signup(e){
	/* eslint-disable no-console */
	
/* eslint-disable no-unused-vars */	
	const data = serialise(e.target)
	this['admin/signup'](data)
	.then(res=>{
			if(res)this.$router.push({path:'/admin/login'})
	
	}).catch(e=>{
			this.$router.push({path:'/admin/signup'})
	})
	},
	...mapActions([
		'admin/signup'
	]),
	
  }
}
</script>

<style src="../../assets/css/loginAndSignup.css" scoped></style>
