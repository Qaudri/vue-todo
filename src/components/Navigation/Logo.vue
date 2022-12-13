<template>
  <div @click="loadPage()">
    <LogoIcon/>
  </div>
</template>

<script>
import LogoIcon from '../Icons/Logo.vue'
export default {

  methods: {
    loadPage(){
      this.$emit('loadPage')
    }
  },

  components : {LogoIcon}
}
</script>

<style>

</style>