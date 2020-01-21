<template>
  <b-modal id="modal-1" :title="title" @ok="newIssue">
    <TextInput @text="setDetails" type='textarea' placeHolder="Enter issue details"/>
  </b-modal>
</template>

<script>
import TextInput from './TextInput'
import {mapActions} from 'vuex'
export default {
  props:{
    title:String,
  },
  data(){
    return {
      issue:{
        details:''
      }
    }
  },
  methods:{
    ...mapActions([
      'patient/createIssue'
    ]),
    setDetails(e){
      this.issue.details=e
    },
    newIssue(){
      if(this.issue.details)
      this['patient/createIssue'](this.issue)
    }
  },
  components:{TextInput},
  name: 'createissue',
}
</script>

