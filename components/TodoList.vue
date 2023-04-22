<template>
  <div class="container mx-auto px-4">
    <h1>TODO LIST</h1>
    <NuxtLink
      to="/todo/insert"
      class="bg-blue-500 text-white px-4 py-2 mb-4 inline-block"
      >Add Todo</NuxtLink
    >
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { Todo } from '~/models/Todo'
import { UpdateTodoRequest } from '~/models/UpdateTodoRequest'

const toast = useToast()

// Todo一覧取得
const { data: todos } = await useFetch<Todo[]>('/api/todos')

/** Todo状態切り替えイベント */
const toggleTodo = async (id: number) => {
  /** 更新対象のTodo */
  const targetTodo = todos.value?.find((todo) => todo.id === id)
  if (!targetTodo) return
  targetTodo.completed = !targetTodo.completed
  // 永続化
  /** リクエスト */
  const request: UpdateTodoRequest = {
    title: targetTodo.title,
    detail: targetTodo.detail,
    completed: targetTodo.completed,
  }
  // APIリクエスト
  const { error } = await useFetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: request,
  })

  // エラーハンドリング
  if (!error.value) {
    toast.success('todo completed update')
  } else {
    toast.error(error.value?.statusCode + ': ' + error.value?.message)
  }
}

/** Todo削除イベント */
const deleteTodo = (id: number) => {
  /** 削除対象のインデックス */
  const targetIndex = todos.value?.findIndex((todo) => todo.id === id)
  /** 対象インデックスの配列要素を削除 */
  if (targetIndex !== -1 && targetIndex) todos.value?.splice(targetIndex, 1)
  // TODO: 永続化
}
</script>
