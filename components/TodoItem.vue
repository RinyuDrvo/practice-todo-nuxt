<template>
  <li
    class="flex flex-col justify-between items-start my-2 border-2 border-gray-300 p-2"
  >
    <div class="flex justify-between items-center w-full">
      <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
      <div>
        <button
          class="bg-blue-500 text-white px-2 py-1 mr-2"
          @click="toggleTodo"
        >
          Toggle
        </button>
        <button class="bg-red-500 text-white px-2 py-1" @click="deleteTodo">
          Delete
        </button>
      </div>
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
