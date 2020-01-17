
<template>
  <div class = "container">
	
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data(){
    return {
      user:'admin'
    }
  },
  components:{},
  methods:{
	
	...mapActions([
		'admin/login'
	]),
	
  }
}
</script>

<style src="../../assets/css/loginAndSignup.css" scoped></style>
