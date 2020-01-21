<template>
  <b-collapse :id="idx" class="mt-2">
    <b-card>
      <slot></slot>
    </b-card>
  </b-collapse>
</template>

<script>
export default {
  name: "card",
  props: {
    idx: String
  }
};
</script>
