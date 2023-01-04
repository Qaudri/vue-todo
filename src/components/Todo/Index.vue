<template>
  <div :class="category === 'urgent'? 'border-red-500' : category === 'later' ? 'border-purple-700' : category === 'completed' ? 'border-green-600' : 'border-white'" class="cursor-pointer flex items-center justify-between p-5 border-l-[1.5rem] bg-gray-800 hover:bg-gray-900 duration-300 ease-out">


    <div class="flex items-center gap-5">
      <div class="flex items-center justify-center" @click="markAsComplete">
        <div :class="task_completed ? 'border-green-600' : 'border-white'" class="h-9 w-9 border-2 border-white rounded-md" ></div>
        <img :class="task_completed ? 'opacity-100' : 'opacity-0'" src="@/assets/icons/checked.svg" class="w-10 h-10 absolute duration-300 ease-in-out" alt="">
      </div>

      <div>
        <h1 class="text-white text-lg">{{task_title}}</h1>
        <p class="text-white text-sm mt-0">{{task_duration}}</p>
      </div>

    </div>

    <button @click="this.$emit('deleteTask')" class="text-white flex gap-2 items-center group cursor-pointer">
      <div class="text-gray-500 w-6 h-6 group-hover:text-primary dark:group-hover:text-white duration-500 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 2L9 3L4 3L4 5L7 5L17 5L20 5L20 3L15 3L14 2L10 2 z M 5 7L5 20C5 21.1 5.9 22 7 22L17 22C18.1 22 19 21.1 19 20L19 7L5 7 z" />
        </svg>
      </div>
      <p class="text-sm text-gray-500 text group-hover:text-primary dark:group-hover:text-white duration-500 ease-in-out">Delete</p>
    </button>

  </div>
</template>

<script>
export default {
  props: {
    category: String,
    task_title: {
      default: 'Your task title',
      type: String
    },
    task_duration: {
      default: '00: 00',
      type: String
    }
  },

  data() {
    return {
      task_completed: false
    }
  },

  methods: {
    markAsComplete(){
      this.task_completed = true
      this.$emit('markedAsComplete')
    }
  },
}
</script>

<style>

</style>