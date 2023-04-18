<template>
  <div class="container mx-auto px-4">
    <h1>TODO LIST</h1>
    <ul>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Todo } from '~/models/Todo'

const todoList = reactive<Todo[]>([])

// const addTodo = (newTodo: Todo) => {
//   todoList.push(newTodo)
// }

/** Todo状態切り替えイベント */
const toggleTodo = (id: number) => {
  /** 更新対象のTodo */
  const targetTodo = todoList.find((todo) => todo.id === id)
  /** 完了状態の斑点 */
  if (targetTodo) targetTodo.completed = !targetTodo.completed
  // TODO: 永続化
}

/** Todo削除イベント */
const deleteTodo = (id: number) => {
  /** 削除対象のインデックス */
  const targetIndex = todoList.findIndex((todo) => todo.id === id)
  /** 対象インデックスの配列要素を削除 */
  if (targetIndex !== -1) todoList.splice(targetIndex, 1)
  // TODO: 永続化
}

/** モックデータ設定 TODO: 削除 */
onMounted(() => {
  todoList.push({
    id: 1,
    title: 'task1',
    detail: 'hoge',
    completed: false,
  })
  todoList.push({
    id: 2,
    title: 'task2',
    detail: 'fuga',
    completed: false,
  })
})
</script>
