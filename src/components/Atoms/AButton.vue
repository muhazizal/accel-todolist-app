<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
    default: 'button'
  },
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button :type="type" :name="name">
    <slot></slot>
  </button>
</template>

<style>
button {
  padding: 8px;
}
button:hover {
  cursor: pointer;
}
</style>
