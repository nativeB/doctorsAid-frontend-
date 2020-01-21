<template>

  <b-form-textarea
    v-if="type==='textarea'"
    id="textarea-rows"
    :placeholder="placeHolder"
    rows="8"
    :value="value"
    @input="emitInput"
    :disabled="disabled"
  ></b-form-textarea>
   <b-form-input 
    :value="value" :disabled="disabled" v-else @input="emitInput" :placeholder="placeHolder"></b-form-input>
   
</template>

<script>
export default {
  name: 'textinput',
  props: {
    placeHolder:String,
    type:String,
    value:String,
    disabled:Boolean
  },
  methods:{
    emitInput(e){
      // eslint-disable-next-line no-console
      console.log(e)
      this.$emit('text',e)
    }
  }
}
</script>

