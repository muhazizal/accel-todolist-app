import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Todo } from '@/types/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const activeTodos = computed<Todo[]>(() => todos.value.filter((todo) => todo.active))
  const completedTodos = computed<Todo[]>(() => todos.value.filter((todo) => !todo.active))

  function addTodo(todo: Todo): void {
    todos.value.push(todo)
  }
  function completeTodo(id: number): void {
    if (id >= 0) {
      const index = todos.value.findIndex((todo) => todo.id === id)
      todos.value[index].active = !todos.value[index].active
    } else {
      alert('Todo Not Found')
    }
  }
  return { todos, activeTodos, completedTodos, addTodo, completeTodo }
})
