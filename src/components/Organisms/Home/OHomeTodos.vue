<script setup lang="ts">
import { computed, defineProps, type PropType } from 'vue'
import { type Todo } from '@/types/todo'

import MHomeTodo from '@/components/Molecules/Home/MHomeTodo.vue'

import { useTodoStore } from '@/stores/todo'
const todo = useTodoStore()

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  data: {
    type: Array as PropType<Todo[]>,
    default: () => []
  },
  emptyMessage: {
    type: String,
    default: 'Oops, your data is empty'
  }
})

const isDataEmpty = computed<boolean>(() => props.data.length === 0)

const handleCheckTodo = (id: number): void => {
  todo.completeTodo(id)
}
</script>

<template>
  <div class="todos">
    <h2>{{ title }}</h2>
    <div class="todos-data">
      <template v-if="isDataEmpty">
        {{ emptyMessage }}
      </template>
      <template v-else>
        <MHomeTodo
          v-for="(todo, index) in data"
          :key="`todo-${index}`"
          :todo="todo"
          :index="index"
          @on-check="handleCheckTodo"
        />
      </template>
    </div>
  </div>
</template>

<style>
.todos-data {
  border: 1px solid grey;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
</style>
