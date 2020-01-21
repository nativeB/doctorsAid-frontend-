<template>
  <b-col >
   <b-dropdown  :text="userObj.firstName" variant="outline-danger" class="m-2">
    <b-dropdown-item @click="logout">Signout</b-dropdown-item>
   </b-dropdown>
	</b-col>
</template>

<script>
export default {
  name: 'card',
  props: {
    userObj:Object,
    type:String
  },
  methods:{
    logout(){
    //destroy token
    localStorage.clear()
    this.$router.push({path:`/${this.type}/login`})
  },
  }
}
</script>

