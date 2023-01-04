<template>
  <div class="flex items-center justify-between p-5 border-l-[1.5rem] bg-gray-800">
    <div class="flex items-center gap-5">
      <div class="flex items-center justify-center" @click="markAsComplete">
        <div :class="task_completed ? 'border-[#0CB800]' : 'border-white'" class="h-9 w-9 border-2 border-white rounded-md" ></div>
        <img :class="task_completed ? 'opacity-100' : 'opacity-0'" src="@/assets/icons/checked.svg" class="w-10 h-10 absolute duration-300 ease-in-out" alt="">
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      task_completed: false
    }
  },

  methods: {
    markAsComplete(){
      this.task_completed = !this.task_completed
    }
  },
}
</script>

<style>

</style>