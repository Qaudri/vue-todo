<template>
  <div class="pt-10">
    <MenuBtn ></MenuBtn>
  </div>
</template>

<script>
import PrimaryBtn from '../components/Ui/Buttons/Primary.vue';
import SecondaryBtn from '../components/Ui/Buttons/Secondary.vue';
import MenuBtn from '../components/Ui/Buttons/Menu.vue';
export default {
  data() {
    return {
      data_item: true
    }
  },

  components: {
    PrimaryBtn, SecondaryBtn, MenuBtn
  },

  methods: {
  },
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