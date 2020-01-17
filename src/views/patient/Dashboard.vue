
<template>
<div class="container" >
	
    <b-card-group deck>
	<Card name='issues' data='4'/>
    </b-card-group>
</div>
  
</template>

<script>
import { mapActions } from 'vuex'
import Card from '../../components/card'
export default {
  name: 'dashboard',
  data(){
    return {
      user:'patient'
    }
  },
  components:{Card},
  methods:{
	
	...mapActions([
		'patient/getProfile',
		'patient/getIssues'
	]),
	initAll(){
		
		const token = localStorage.getItem('token')
		if(token){
			this.axios.defaults.headers.common = {
			"token":token
			};
		this['patient/getProfile']()
		this['patient/getIssues']()
		}else{
			this.$router.push({path:'/patient/login'})
		}
	}
  },
  created(){
this.initAll()
  }
}
</script>

<style src="../../assets/css/loginAndSignup.css" scoped></style>
