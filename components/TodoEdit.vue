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
      <div class="mb-4">
        <label class="block mb-2">Completed</label>
        <input
          v-model="todoCompleted"
          type="checkbox"
          class="form-checkbox text-blue-500"
        />
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
import { UpdateTodoRequest } from '~/models/UpdateTodoRequest'

const toast = useToast()
const route = useRoute()

/** タイトル */
const todoTitle = ref('')
/** 詳細 */
const todoDetail = ref('')
/** 完了状態 */
const todoCompleted = ref(false)

/** Todo読み込み */
await useAsyncData(async () => {
  const id = route.params.id
  const response = await $fetch(`/api/todos/${id}`, { method: 'GET' })
  todoTitle.value = response.title
  todoDetail.value = response.detail
  todoCompleted.value = response.completed
})

/** Todo更新 */
const updateTodo = async () => {
  const id = parseInt(route.params.id.toString())
  // パスパラメータバリデーション
  if (!Number.isInteger(id)) {
    alert('id must integer')
    return
  }
  /** リクエスト */
  const request: UpdateTodoRequest = {
    title: todoTitle.value,
    detail: todoDetail.value,
    completed: todoCompleted.value,
  }
  // APIリクエスト
  const { error } = await useFetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: request,
  })
  // エラーハンドリング
  if (error.value) {
    alert(error.value.statusCode + ': ' + error.value.message)
    return
  }

  // 成功時
  // トースト表示
  toast.success('Todo updated successfully')
  // 一覧に戻る
  await navigateTo('/')
}
</script>
