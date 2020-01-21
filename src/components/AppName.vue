<template>
  <b-col>
    <h3>{{ name }}</h3>
  </b-col>
</template>

<script>
export default {
  name: "card",
  props: {
    name: String
  }
};
</script>
