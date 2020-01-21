<template>
  <b-modal :id="id" :title="title">
    <slot></slot>
  </b-modal>
</template>

<script>
export default {
  props: {
    title: String,
    id: String
  },
  name: "modalgen"
};
</script>
