<template>
  <label  for="label_for" class="text-sm text-accent1-300 block mb-2">{{label_text}}</label>
</template>

<script>
export default {
  props: {
    label_for: String,
    label_text: String,
  }
}
</script>

<style>

</style>