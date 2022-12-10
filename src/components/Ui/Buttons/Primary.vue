<template>
  <div>
    <button class="rounded bg-primary hover:bg-opacity-75 duration-500 ease-out text-white text-base font-medium px-5 py-2">{{button_text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    button_text: String 
  }
}
</script>

<style>

</style>