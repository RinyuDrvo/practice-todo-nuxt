<template>
  <li
    class="flex items-center justify-between bg-white p-4 mb-2 rounded shadow"
  >
    <div @click="toggleTodo">
      <input
        type="checkbox"
        class="form-checkbox text-blue-500"
        :checked="todo.completed"
      />
      <span :class="{ 'line-through': todo.completed }" class="ml-2">{{
        todo.title
      }}</span>
    </div>
    <div>
      <NuxtLink
        :to="`/todo/${todo.id}`"
        class="bg-blue-500 text-white px-2 py-2 rounded mr-2"
        >Edit</NuxtLink
      >
      <AtomsButton :label="'Delete'" @click.stop="deleteTodo" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { Todo } from 'models/Todo'

const emit = defineEmits<{
  (e: 'toggleTodo', id: number): void
  (e: 'deleteTodo', id: number): void
}>()

const props = defineProps<{ todo: Todo }>()

const toggleTodo = () => {
  emit('toggleTodo', props.todo.id)
}

const deleteTodo = () => {
  emit('deleteTodo', props.todo.id)
}
</script>
