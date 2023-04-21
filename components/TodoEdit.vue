<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Edit Todo</h1>
    <form @submit.prevent="updateTodo">
      <div class="mb-4">
        <label for="title" class="block mb-2">Title</label>
        <input
          id="title"
          v-model="todoTitle"
          type="text"
          class="border-2 border-gray-300 p-2 w-full"
          placeholder="Todo title"
          required
        />
      </div>
      <div class="mb-4">
        <label for="details" class="block mb-2">Details</label>
        <textarea
          id="details"
          v-model="todoDetail"
          class="border-2 border-gray-300 p-2 w-full"
          placeholder="Todo details"
          rows="5"
        ></textarea>
      </div>
      <div class="flex justify-between">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">
          Update Todo
        </button>
        <NuxtLink to="/" class="bg-gray-500 text-white px-4 py-2"
          >Back to List</NuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()

/** タイトル */
const todoTitle = ref('')
/** 詳細 */
const todoDetail = ref('')

/** TODO: Todo読み込み */

/** Todo更新 */
const updateTodo = async () => {
  // TODO: APIリクエスト
  // TODO: エラーハンドリング

  // 成功時
  // トースト表示
  toast.success('Todo added successfully')
  // 一覧に戻る
  await navigateTo('/')
}
</script>
