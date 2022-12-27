<template>
  <div class="w-screen h-screen flex items-center justify-center mx-auto px-6 md:px-10 bg-dark">
    <form @submit.prevent="registerUser()" class="w-full md:w-1/2 lg:w-1/3 border border-secondary rounded-2xl p-5">
      <LogoIcon :white_logo="true" class="w-36 mx-auto mb-8"></LogoIcon>

      <Input label="Email" type="text" placeholder="Enter your email address" :error="false" v-model:inputValue="form.email"></Input>

      <Input label="Username" type="text" placeholder="Enter your username" :error="false" v-model:inputValue="form.username" class="mt-5"></Input>

      <Input label="Password" type="password" placeholder="Enter your Password" :error="password_error" v-model:inputValue="form.password" class="mt-5"></Input>

      <Button class="mt-5" :loading="loadingState" loadingText="Authenticating">SignUp</Button>
    </form>
  </div>
</template>

<script>
import LogoIcon from '../components/Icons/Logo.vue'
export default {
  data() {
    return {
      loadingState: false,
      password_error: false,
      form: {
        email: '',
        username: '',
        password: ''
      },

      users: [

      ]
    }
  },

  methods: {
    registerUser(){
      this.loadingState = true
      // const newUsers = this.users.forEach(user => {
      //   if (user.email !== form.email) {
      //     if (user.username !== form.username) {
      //       if(form.password >= 8){
      //         this.users.push({
      //           email: form.email,
      //           username: form.username,
      //           password: form.password,
      //         })

      //         localStorage.setItem('users', JSON.stringify(this.users))
      //       } else {
      //         this.password_error = true
      //       }
      //     } else {
      //       console.log('this username already exists')
      //     }
      //   } else {
      //     console.log('this email already exists')
      //   }
      // });

      setTimeout(() => {
        this.$router.push({path: '/dashboard'})
      }, 1000);
    }
  },

  created(){
    this.users = localStorage.getItem('users')
  },

  components: {
    LogoIcon
  }
}
</script>

<style>

</style>