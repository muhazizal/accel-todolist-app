<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { type Todo } from '@/types/todo'

defineProps({
  todo: {
    type: Object as PropType<Todo>,
    default: () => ({
      id: null,
      task: '',
      active: true
    })
  }
})
</script>

<template>
  <div class="todo">
    <span>
      <input
        class="todo-checkbox"
        type="checkbox"
        :checked="!todo.active"
        @click.prevent="$emit('on-check', todo.id)"
      />
      {{ todo.task }}
    </span>
  </div>
</template>

<style>
.todo span {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.todo-checkbox {
  margin-right: 8px;
}
</style>
