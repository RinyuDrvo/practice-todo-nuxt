import { Todo } from '~/models/Todo'

export default defineEventHandler(() => {
  const mode = useRuntimeConfig()
  // 開発環境の場合
  if (mode.public.environment === 'development') {
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
  }
  // TODO: APIリクエスト
  // throw createError({
  //   statusCode: 400,
  //   statusMessage: 'server request error',
  // })
})
