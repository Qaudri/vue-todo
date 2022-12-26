<template>
    <div class="w-full">
      <label class="block text-xs px-2 text-gray-500 mb-2" v-if="label">{{label}}
         <!-- <span class="text-red text-xs">{{error}}</span> -->
      </label>
      <input :class="{'border border-red-400 focus:border-red-400 active:border-red-400' : error}" autocomplete="off"  class=" w-full py-2 px-3 text-sm outline-none bg-accent1-50 dark:bg-accent1-600 bg-opacity-50 ring-0 focus:outline-none focus:border-accent2-700 active:border-accent2-700 rounded-lg" 
    :type="type" :disabled="disabled" :placeholder="placeholder" :value="input_value" @input="$emit('input', $event.target.value)" ref="input">
      <!-- <p></p> -->
    </div>
    
</template>

<script>
  export default {
    name:"TextInput",
    props: {
      extraClass: String,
      error: Boolean,
      label:String,
      input_value: [String, Number],
      type: String,
      disabled: Boolean,
      placeholder:String,
      rounded:Boolean
    },

    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

