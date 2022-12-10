<template>
  <div>
    <PrimaryBtn button_text="Log in">Sign Up</PrimaryBtn>
    <SecondaryBtn>Log in</SecondaryBtn>

  </div>
</template>

<script>
import PrimaryBtn from '../components/Ui/Buttons/Primary.vue';
import SecondaryBtn from '../components/Ui/Buttons/Secondary.vue';

export default {
  components: {
    PrimaryBtn, SecondaryBtn
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