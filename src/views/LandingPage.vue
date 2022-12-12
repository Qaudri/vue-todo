<template>
  <div class="pt-10">
    <Logo></Logo>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data_item: true
    }
  },

  methods: {
  },
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