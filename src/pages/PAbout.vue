<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import TAbout from '@/components/Templates/TAbout.vue'

const isLoading = ref<boolean>(false)
const data = reactive({
  name: '',
  class: '',
  role: ''
})

const loadData = () => {
  isLoading.value = true
  setTimeout(() => {
    data.name = 'Muhamad Aziz Al-asaad'
    data.class = 'FE-ACLB1-3'
    data.role = 'Front-End Engineer'
    isLoading.value = false
  }, 1500)
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <main>
    <TAbout :is-loading="isLoading" :data="data" />
  </main>
</template>
