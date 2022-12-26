<template>
  <header class="py-4 container mx-auto px-6 md:px-10 flex justify-between items-center relative">
    <div class="w-36">
      <LogoIcon :white_logo="true"></LogoIcon>
    </div>

    <MenuBtn @buttonClicked="toggleMenu()"></MenuBtn>

    <nav :class="menu_revealed ? 'translate-x-0' : 'translate-x-full'" class="h-screen md:h-fit z-10 md:z-0 md:static bg-dark mdLbg-transparent w-full md:w-fit absolute left-0 top-36 md:top duration-500 ease-in-out md:translate-x-0">
      
      <ul class="grid grid-cols-1 place-items-center gap-8 md:flex items-center md:gap-5">
        <li>
          <a class="text-white hover:text-primary duration-500 ease-in-out font-medium text-sm" href="">Features</a>
        </li>         
        <li>
          <a class="text-white hover:text-primary duration-500 ease-in-out font-medium text-sm" href="">Products</a>
        </li>         
          <li>
          <a class="text-white hover:text-primary duration-500 ease-in-out font-medium text-sm" href="">Resources</a>
        </li>
        <li>
          <a class="text-white hover:text-primary duration-500 ease-in-out font-medium text-sm" href="#pricing">Pricing</a>
        </li>
        <li>
          <PrimaryBtn @buttonClicked="this.$router.push({path: '/register'})">Sign Up</PrimaryBtn>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuBtn from '../Ui/Buttons/Menu.vue'
import LogoIcon from '../Icons/Logo.vue'

export default {
  components: {
    MenuBtn, LogoIcon
  },

  data() {
    return {
      menu_revealed: false
    }
  },

  methods: {
    toggleMenu(){
      this.menu_revealed = !this.menu_revealed
    }
  },
}
</script>

<style>

</style>