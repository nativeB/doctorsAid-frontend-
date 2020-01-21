<template>
  <b-modal id="modal-2" :title="title">
    <p>{{ response }}</p>
  </b-modal>
</template>

<script>
export default {
  props: {
    title: String,
    response: String
  },
  name: "createissue"
};
</script>
