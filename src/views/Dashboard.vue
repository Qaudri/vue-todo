<template>
  <div class="bg-dark min-h-screen flex justify-center items-center">


    <div :class="delete_task_modal ? 'block': 'hidden'" class="w-full fixed z-20 bg-secondary bg-opacity-75 blurr items-center flex justify-center h-screen px-6 md:px-0 lg:px-10">

      <button @click="this.delete_task_modal = false">
        <svg class="w-8 h-8 top-7 right-7 absolute text-white hover:text-primary duration-500 ease-in-out cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" fill="currentColor">
        <path d="M21.125 0L4.875 0C2.183594 0 0 2.183594 0 4.875L0 21.125C0 23.816406 2.183594 26 4.875 26L21.125 26C23.816406 26 26 23.816406 26 21.125L26 4.875C26 2.183594 23.816406 0 21.125 0 Z M 18.78125 17.394531L17.390625 18.78125C17.136719 19.035156 16.722656 19.035156 16.46875 18.78125L13 15.3125L9.53125 18.78125C9.277344 19.035156 8.863281 19.035156 8.609375 18.777344L7.21875 17.394531C6.96875 17.136719 6.96875 16.726563 7.21875 16.46875L10.6875 13L7.222656 9.535156C6.96875 9.277344 6.96875 8.863281 7.222656 8.609375L8.609375 7.222656C8.863281 6.964844 9.28125 6.964844 9.535156 7.222656L13 10.6875L16.46875 7.222656C16.722656 6.964844 17.140625 6.964844 17.390625 7.222656L18.78125 8.605469C19.035156 8.863281 19.035156 9.277344 18.78125 9.535156L15.3125 13L18.78125 16.46875C19.03125 16.726563 19.03125 17.136719 18.78125 17.394531Z"/>
      </svg>
      </button>

      <form @submit.prevent="deleteTask()" action="" method="post" class="rounded-lg p-5 border border-slate-300 dark:border-secondary w-full lg:w-1/3 mx-auto grid gap-5 bg-dark">

        <h1 class="text-white text-4xl md:text-3xl lg:text-4xl font-medium capitalize">Delete task</h1>

        <div>
          <img src="@/assets/icons/important.svg" class="w-36 mx-auto" alt="">
          <p class="text-center text-sm text-white mt-3">Are you sure you want to delete this task? This action is irreversible!</p>
        </div>
        <PrimaryBtn class="w-full flex justify-center">Delete Task</PrimaryBtn>
        <button @click="this.delete_task_modal = false" class="text-white text-sm text-center hover:text-primary underline duration-500 ease-in-out mx-auto flex justify-center -mt-3">Cancel</button>
      </form>
    </div> 

    <div :class="create_task_form ? 'block': 'hidden'" class="w-full fixed z-20 bg-secondary bg-opacity-75 blurr items-center flex justify-center h-screen px-6 md:px-0 lg:px-10">

      <button @click="this.create_task_form = false">
        <svg class="w-8 h-8 top-7 right-7 absolute text-white hover:text-primary duration-500 ease-in-out cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" fill="currentColor">
        <path d="M21.125 0L4.875 0C2.183594 0 0 2.183594 0 4.875L0 21.125C0 23.816406 2.183594 26 4.875 26L21.125 26C23.816406 26 26 23.816406 26 21.125L26 4.875C26 2.183594 23.816406 0 21.125 0 Z M 18.78125 17.394531L17.390625 18.78125C17.136719 19.035156 16.722656 19.035156 16.46875 18.78125L13 15.3125L9.53125 18.78125C9.277344 19.035156 8.863281 19.035156 8.609375 18.777344L7.21875 17.394531C6.96875 17.136719 6.96875 16.726563 7.21875 16.46875L10.6875 13L7.222656 9.535156C6.96875 9.277344 6.96875 8.863281 7.222656 8.609375L8.609375 7.222656C8.863281 6.964844 9.28125 6.964844 9.535156 7.222656L13 10.6875L16.46875 7.222656C16.722656 6.964844 17.140625 6.964844 17.390625 7.222656L18.78125 8.605469C19.035156 8.863281 19.035156 9.277344 18.78125 9.535156L15.3125 13L18.78125 16.46875C19.03125 16.726563 19.03125 17.136719 18.78125 17.394531Z"/>
      </svg>
      </button>

      <form @submit.prevent="createTask()" action="" method="post" class="rounded-lg p-5 border border-slate-300 dark:border-secondary w-full lg:w-1/3 mx-auto grid gap-5 bg-dark">

        <h1 class="text-white text-4xl md:text-3xl lg:text-4xl font-medium capitalize">Create a new task</h1>

        <Input label="Title" type="text" placeholder="Enter task title" :error="false" v-model:inputValue="form.title"></Input>
        
        <Input label="Description" type="text" placeholder="Enter task description" :error="false" v-model:inputValue="form.description"></Input>

        <Input label="Duration" type="text" placeholder="Enter task duration" :error="false" v-model:inputValue="form.duration"></Input>

        <div>
          <label class="block text-xs px-2 text-white mb-2">Category</label>
          <select v-model="form.category" class="w-full py-2 px-4 text-sm outline-none bg-secondary text-white ring-0 focus:border-primary active:border-primary rounded-lg border border-transparent">
            <option value="urgent">Urgent</option>
            <option value="later">Later</option>
          </select>
        </div> 

        <PrimaryBtn class="w-full flex justify-center">Create Task</PrimaryBtn>

        <button class="text-white text-sm text-center hover:text-primary underline duration-500 ease-in-out mx-auto flex justify-center">Cancel</button>
      </form>
    </div> 

    <div class="w-full md:w-2/3 grid gap-5">
      <PrimaryBtn class="flex justify-end" @buttonClicked="createTaskForm()">Create New Task</PrimaryBtn>
      <Task v-for="(item, index) in task_items" :index="index" :task="item" :key="item.id" :task_title="item.title" :task_duration="item.duration" @deleteTask="toggleDelete()" @markedAsComplete="taskCompleted()" :category="item.category"></Task>

    </div>
  </div>
</template>

<script>
import Task from '../components/Todo/Index.vue'
export default {
  data() {
    return {
      task_items: [
      ],
      form: {
        title: '',
        description: '',
        duration: '',
        category: ''
      },
      create_task_form: false,
      delete_task_modal: false,
      selected_task: ''
    }
  },

  methods: {
    createTask(){
      let task_id = Math.floor(Math.random() * 100)
      let task_info = {
        id: task_id,
        title: this.form.title,
        description: this.form.description,
        duration: this.form.duration,
        category: this.form.category
      }

      this.task_items.push(task_info)
      this.createTaskForm()
      this.form.title = ''
      this.form.description = ''
      this.form.duration = ''
      this.form.category = ''
      localStorage.setItem('tasks', JSON.stringify(this.task_items))
    },

    taskCompleted(){
      localStorage.setItem('tasks', JSON.stringify(this.task_items))
    },

    createTaskForm(){
      this.create_task_form = !this.create_task_form
    },

    toggleDelete(){
      this.delete_task_modal = !this.delete_task_modal
    },

    deleteTask(task){
      this.task_items.splice(task, 1)
      this.toggleDelete()
      localStorage.setItem('tasks', JSON.stringify(this.task_items))
    }
  },

  created() {
    this.task_items = JSON.parse(localStorage.getItem('tasks'))
  },

  components: {
    Task,
  }
}
</script>

<style>
  .blurr  {
    backdrop-filter: blur(5px);
  }
</style>