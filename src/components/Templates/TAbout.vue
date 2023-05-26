<script setup lang="ts">
import { defineProps } from 'vue'
import ASkeleton from '@/components/Atoms/ASkeleton.vue'
import MAboutData from '../Molecules/About/MAboutData.vue'

defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({
      name: '',
      class: '',
      role: ''
    })
  }
})
</script>

<template>
  <div class="about">
    <div v-if="isLoading" class="about-wrapper">
      <div v-for="index in Object.keys(data).length" :key="index" class="about-skeleton">
        <ASkeleton :width="40" :height="24" />
        <ASkeleton :width="120" :height="24" />
      </div>
    </div>
    <div v-else class="about-wrapper">
      <div v-for="(value, key) in data" :key="`about-${key}`" class="about-content">
        <MAboutData :title="key" :description="value" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.about-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-skeleton,
.about-content {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
}
</style>
