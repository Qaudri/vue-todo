<template>
  <div>
    <div class="bg-white p-3 rounded-md flex w-60">
      <img :src="imgSrc" class="w-7 h-7 mr-3" alt="">
      <div>
        <h1 class="text-2xl font-medium m-0 text-left">{{tool_title}}</h1>
        <p class="text-xs text-gray-500 w-full">Embed and get live updates</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tool_title: String,
    imgSrc: String
  }
}
</script>

<style>

</style>