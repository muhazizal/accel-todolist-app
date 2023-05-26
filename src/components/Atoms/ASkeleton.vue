<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div
    :style="{
      width: `${width}px`,
      height: `${height}px`
    }"
    class="skeleton"
  ></div>
</template>

<style scoped>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 4px;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(0, 0%, 50%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
