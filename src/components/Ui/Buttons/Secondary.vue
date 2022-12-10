<template>
  <div>
    <button class="w-full py-3 bg-dark rounded-md hover:bg-primary dark:text-dark text-white dark:hover:text-dark dark:bg-white duration-500 ease-in-out inline-block mt-10 font-medium">{{button_text}}</button>
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