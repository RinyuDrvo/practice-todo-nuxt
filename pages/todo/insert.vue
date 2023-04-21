<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Add Todo</h1>
    <form @submit.prevent="addTodo">
      <div class="mb-4">
        <label for="title" class="block mb-2">Title</label>
        <input
          id="title"
          v-model="newTodoTitle"
          type="text"
          class="border-2 border-gray-300 p-2 w-full"
          placeholder="New todo"
          required
        />
      </div>
      <div class="mb-4">
        <label for="details" class="block mb-2">Details</label>
        <textarea
          id="details"
          v-model="newTodoDetails"
          class="border-2 border-gray-300 p-2 w-full"
          placeholder="Todo details"
          rows="5"
        ></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">
        Add Todo
      </button>
      <NuxtLink to="/" class="bg-gray-500 text-white px-4 py-3 ml-1"
        >Back to List</NuxtLink
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { InsertTodoRequest } from 'models/InsertTodoRequest'

/** 新規タイトル */
const newTodoTitle = ref('')
/** 詳細 */
const newTodoDetails = ref('')
/** TODO追加イベント */
const addTodo = async () => {
  /** リクエストプロパティ */
  const request: InsertTodoRequest = {
    title: newTodoTitle.value,
    detail: newTodoDetails.value,
  }

  // API呼び出し
  const { error } = await useFetch('/api/todos', {
    method: 'POST',
    body: request,
  })

  // エラーハンドリング
  if (error.value) {
    alert(error.value.statusCode + ': ' + error.value.message)
    return
  }

  // 一覧に戻る
  await navigateTo('/')
}
</script>
