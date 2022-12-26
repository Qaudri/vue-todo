<template>
  <div class="bg-dark overflow-x-hidden max-w-screen relative">
    <Header></Header>

    <section class="container mx-auto px-6 md:px-10 py-20">
      <h1 class="typo text-white text-5xl md:text-6xl font-bold text-center">Get your daily life <br/> with <span class="text-primary">Loopwork</span></h1>

      <p class="text-white text-sm text-center my-4">Loopwork, a platform committed to helping you stay organized,<br/>connected and managing all of your tasks.</p>

      <div class="flex items-center gap-10 mt-10 justify-center">
        <PrimaryBtn>Get Started</PrimaryBtn>

        <TertiaryBtn>
          <div class="group flex items-center gap-2">
            <img src="@/assets/icons/play.svg" class="w-9 h-9 p-0.5 rounded-full border-2 border-white group-hover:border-primary group-hover:p-1 duration-500 ease-in-out" alt="">
            How it works?
          </div>
        </TertiaryBtn>
      </div>

      <img src="@/assets/images/hero-dashboard.png" class="w-full drop-shadow-2xl mt-20" alt="">
    </section>

    <section class="container mx-auto px-6 md:px-10 py-10">
      <p class="text-white text-xl text-center">Trusted over 10,000+ teams around the world.</p>

      <div class="grid grid-cols-4 md:grid-cols-5 gap-5 md:gap-12 items-center mt-8">
        <img src="@/assets/icons/airbnb.svg" alt="">
        <img src="@/assets/icons/Coinbase.svg" alt="">
        <img src="@/assets/icons/airbnb.svg" alt="">
        <img src="@/assets/icons/Coinbase.svg" alt="">
        <img src="@/assets/icons/Coinbase.svg" class="hidden md:block" alt="">
      </div>
    </section>

    <section class="min-h-full container mx-auto px-6 md:px-10 mt-20 lg:flex items-center justify-between gap-20">
      <div>
        <div class="w-full lg:w-1/2 grid grid-cols-1 gap-5 md:gap-8 lg:gap-5 md:grid-cols-2 lg:grid-cols-1">
          <div>
            <h1 class="text-4xl text-white">Design for every use case.</h1>
            <p class="text-sm text-white mt-3">Simplify your process management by offering you the best tool that suit your current type of work.</p>
          </div>
    
          <div class="mt-8 md:mt-0 lg:mt-6 p-4 hover:border-primary rounded-xl border-2 border-transparent duration-500 ease-in-out md:pr-0 lg:pr-10">
            <h1 class="flex items-center gap-3"><span class="text-gray-500 text-sm">01</span><span class="text-white text-2xl">To-do list.</span></h1>
    
            <p class="text-sm text-white mt-2">Organize, manage, and create your ultimate to-do list easily and seamlessly.</p>
          </div>
    
          <div class="p-4 hover:border-primary rounded-xl border-2 border-transparent duration-500 ease-in-out lg:pr-10">
            <h1 class="flex items-center gap-3"><span class="text-gray-500 text-sm">02</span><span class="text-white text-2xl">Kanban board</span></h1>
    
            <p class="text-sm text-white mt-2">Create and build a flexible kanban system that works with your project.</p>
          </div>
    
          <div class="p-4 hover:border-primary rounded-xl border-2 border-transparent duration-500 ease-in-out lg:pr-10">
            <h1 class="flex items-center gap-3"><span class="text-gray-500 text-sm">03</span><span class="text-white text-2xl">Sprints.</span></h1>
    
            <p class="text-sm text-white mt-2">Sprint through any design or development process in your team</p>
          </div>
        </div>

        <div class="mt-8 flex lg:block justify-center mx-auto lg:mx-0">
          <PrimaryBtn>Explore more cases</PrimaryBtn>
        </div>
      </div>

      <div class="w-4/5 hidden lg:block lg:absolute relative lg:-right-1/3">
        <img src="@/assets/images/hero-dashboard.png"  alt="">
      </div>
    </section>

    <section class="container mx-auto px-6 md:px-10 mt-24">
    <h1 class="text-white text-4xl mx-auto text-center">Sync with your favorite tools.</h1>
    <p class="text-white text-sm mx-auto max-w-md text-center mt-3">Smart integration with all major tools and apps out there so you won't miss anything out there.</p>

    <div class="my-8 bg-secondary p-5 rounded-2xl">
      <ssr-carousel class="flex overflow-x-hidden gap-3">
        <Tool v-for="tool in tools" :key="tool.id" :tool_title="tool.title" :imgSrc="tool.image">
        </Tool>
      </ssr-carousel>
    </div>
    </section>

    <div class="h-20 w-20 mx-auto" :class="bgColor === 'red' ? 'bg-red-500' : bgColor === 'blue' ? 'bg-blue-600' : 'bg-white' "></div>
  </div>
</template>

<script>
import Header from '../components/Navigation/Header.vue';
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
import Tool from '../components/Tools/Index.vue';
import notion from '../assets/icons/notion.svg'
import trello from '../assets/icons/trello.svg'
import drive from '../assets/icons/drive.svg'
import slack from '../assets/icons/slack.svg'
import office from '../assets/icons/office-1.svg'
import team from '../assets/icons/office.svg'

export default {
  data() {
    return {
      bgColor: 'green',
      data_item: true,
      tools: [
        {
          id: 1,
          image: notion,
          title: 'Notion'
        },

        {
          id: 2,
          image: trello,
          title: 'Trello'
        },

        {
          id: 3,
          image: drive,
          title: 'Drive'
        },

        {
          id: 4,
          image: slack,
          title: 'Slack'
        },

        {
          id: 5,
          image: office,
          title: 'Office'
        },

        {
          id: 6,
          image: team,
          title: 'Team'
        },
      ]
    }
  },

  methods: {
  },

  components: {
    Header, 
    Tool, 
  }
}
</script>

<style>
  .typo {
    font-family: Typo Style Demo;
  }

  .typo > br {
    content: "A" !important;
    display: block !important;
    margin-bottom: .25em !important;
  }

  .h-sm {
    height: 0.1px;
  }
</style>