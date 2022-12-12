<template>
  <div>
    <button @click="emitClicked()" class="block w-8 md:hidden">
      <div :class="rotateMenu ? 'transform rotate-45 transition' : 'transform rotate-0'" class="duration-300 ease-in-out bg-primary h-1 w-8 mb-1.5"></div>

      <div :class="rotateMenu ? 'transform -rotate-45 -mt-2.5 transition' : 'transform rotate-0'" class="duration-300 ease-in-out bg-primary h-1 w-8"></div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotateMenu: false,
    }
  },

  methods: {
    emitClicked(){
      this.rotateMenu = !this.rotateMenu
      this.$emit('buttonClicked')
    }
  },
}
</script>

<style>

</style>