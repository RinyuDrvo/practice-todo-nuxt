import { Todo } from '~/models/Todo'

/** Todo一覧取得モックAPI */
export default defineEventHandler(() => {
  const todos: Todo[] = [
    {
      id: 1,
      title: 'task1',
      detail: 'hoge',
      completed: false,
    },
    {
      id: 2,
      title: 'task2',
      detail: 'fuga',
      completed: false,
    },
  ]
  return todos
})
