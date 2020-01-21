<template>
  <b-modal :id="id" :title="title" @ok="respondIssue">
    <h4>{{`${cPatient.firstName} ${cPatient.lastName}`}} reports</h4>
    <br/>
    <p> {{cIssue.details}}</p>
    <br/>
    <TextInput @text="setResponse" :disabled="cIssue.status==='resolved'" :value="cIssue.response||''" type='textarea' placeHolder="Enter your response "/>
  </b-modal>
</template>

<script>
import TextInput from './TextInput'
import {mapActions} from 'vuex'
export default {
  props:{
    title:String,
    id:String,
    cIssue:Object,
    cPatient:Object
  },
  data(){
    return {
      issue:{
        response:'',
      }
    }
  },
  methods:{
    ...mapActions([
      'admin/respondIssue'
    ]),
    setResponse(e){
      this.issue.response=e
    },
    respondIssue(){
      if(this.cIssue.status ==='resolved') return
      const {_id} = this.cIssue;
      this['admin/respondIssue']({_id,issue:this.issue})
    }
  },
  components:{TextInput},
  name: 'respondIssue',
}
</script>

