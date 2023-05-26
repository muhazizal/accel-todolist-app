<script setup lang="ts">
import MGreetings from '../Molecules/MGreetings.vue'
import MNavbar from '../Molecules/MNavbar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MGreetings msg="My Todo List App" />
      <MNavbar />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
