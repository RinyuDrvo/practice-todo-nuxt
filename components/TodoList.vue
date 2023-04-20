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
        v-for="todo in data?.todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { GetTodosResponse } from '~/models/GetTodosResponse'

// Todo一覧取得
// TODO: 初回レンダリング時にリクエストされていない
const { data } = await useFetch<GetTodosResponse>('api/todos')

/** Todo状態切り替えイベント */
const toggleTodo = (id: number) => {
  /** 更新対象のTodo */
  const targetTodo = data.value?.todos?.find((todo) => todo.id === id)
  /** 完了状態の斑点 */
  if (targetTodo) targetTodo.completed = !targetTodo.completed
  // TODO: 永続化
}

/** Todo削除イベント */
const deleteTodo = (id: number) => {
  /** 削除対象のインデックス */
  const targetIndex = data.value?.todos?.findIndex((todo) => todo.id === id)
  /** 対象インデックスの配列要素を削除 */
  if (targetIndex !== -1 && targetIndex)
    data.value?.todos?.splice(targetIndex, 1)
  // TODO: 永続化
}
</script>
