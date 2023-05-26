<script setup lang="ts">
import OHomeForm from '../Organisms/Home/OHomeForm.vue'
import OHomeTodos from '../Organisms/Home/OHomeTodos.vue'

import { useTodoStore } from '@/stores/todo'

const todo = useTodoStore()
</script>

<template>
  <div class="home">
    <OHomeForm />
    <OHomeTodos
      class="home-todos"
      title="Active Todos"
      empty-message="It's empty, create your todo list now"
      :data="todo.activeTodos"
    />
    <OHomeTodos
      class="home-todos"
      title="Completed Todos"
      empty-message="It's empty, you need to do something!"
      :data="todo.completedTodos"
    />
  </div>
</template>

<style>
.home-todos {
  margin-top: 32px;
}
</style>
