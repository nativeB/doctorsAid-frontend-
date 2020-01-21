<template>
  <b-col  col="2">
    <b-card align-v="center" :bg-variant="v" text-variant="white" :header="header" class="text-center">
        <b-card-text>{{content}}</b-card-text>
      </b-card>
	</b-col>
</template>

<script>
export default {
  name: 'card',
  props: {
    header: String,
    content:String,
    v:String
  }
}
</script>

