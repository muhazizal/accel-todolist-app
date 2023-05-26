<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="textfield">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="(value) => $emit('on-input', value)"
    />
  </div>
</template>

<style>
.textfield {
  display: flex;
  flex-direction: column;
}

.textfield input {
  padding: 8px;
}
</style>
