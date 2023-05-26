<template>
  <div class="text-capitalize">{{ title }}:</div>
  <div>{{ description }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
