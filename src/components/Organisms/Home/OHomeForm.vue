<script setup lang="ts">
import { ref } from 'vue'

import MTextField from '@/components/Molecules/MTextField.vue'
import AButton from '@/components/Atoms/AButton.vue'

import { useTodoStore } from '@/stores/todo'
const todo = useTodoStore()

const inputTodo = ref<string>('')
const handleInputTodo = (payload: any): void => {
  inputTodo.value = payload.target.value
}
const handleSubmitForm = (): void => {
  if (inputTodo.value) {
    todo.addTodo({
      id: Math.floor(Math.random() * 99),
      task: inputTodo.value,
      active: true
    })
    handleResetForm()
    alert('Add todo success!')
  } else {
    alert('todo cannot be empty!')
  }
}
const handleResetForm = () => {
  inputTodo.value = ''
}
</script>

<template>
  <h2>Make Your List</h2>
  <form class="form" @submit.prevent="handleSubmitForm">
    <MTextField
      label="Todo"
      id="todo"
      name="todo"
      placeholder="sleep"
      :value="inputTodo"
      @on-input="handleInputTodo"
    />
    <AButton class="form-action" type="submit"> Add </AButton>
  </form>
</template>

<style>
.form {
  border: 1px solid grey;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.form-action {
  margin-top: 16px;
  width: fit-content;
  margin-left: auto;
}
</style>
