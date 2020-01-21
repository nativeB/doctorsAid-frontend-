<template>
  <b-tabs
    active-tab-class="font-weight-bold text-success"
    class="mt-5 w-100"
    content-class="mt-3 "
    fill
  >
    <b-tab
      v-for="(i, idx) in categories"
      :title="i.name"
      :key="idx"
      :active="idx === 0"
    >
      <slot :status="i.status"></slot>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: "issuescategories",
  //components:{IssuesList},
  props: {
    categories: Array
  }
};
</script>
