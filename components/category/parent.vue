<template>
  <h1 class="more-head">
    <span class="transporter-label">More From</span>
    <span>{{parent.name}}</span>
  </h1>
</template>
<script>
export default {
    computed:{
        parent(){
            return this.$store.getters["category/getParent"]
        }
    }
}
</script>