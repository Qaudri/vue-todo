<template>
  <div class="bg-dark w-full h-screen">
    <Header></Header>
  </div>
</template>

<script>
import Header from '../components/Navigation/Header.vue';
export default {
  data() {
    return {
      data_item: true
    }
  },

  methods: {
  },

  components: {
    Header
  }
}
</script>

<style>
  .typo {
    font-family: Typo Style Demo;
  }

  .typo > br {
    content: "A" !important;
    display: block !important;
    margin-bottom: .25em !important;
  }

  .h-sm {
    height: 0.1px;
  }
</style>