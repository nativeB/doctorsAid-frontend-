<template>
  <b-list-group>
  <b-list-group-item class="listStyle" v-b-toggle="`${idPre}-${idx}`" :key="idx" v-for="(i,idx) in list" >
    <slot :data="i" :idx="`${idPre}-${idx}`"></slot>
  </b-list-group-item>
</b-list-group>
</template>

<script>
export default {
  name: 'issueslist',
  props: {
    data:Array,
    list:Array,
    idPre:String
  }
}
</script>
<style scoped>
.listStyle{
  cursor: pointer;
}
</style>

