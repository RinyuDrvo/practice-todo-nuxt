import { Todo } from '~/models/Todo'

/** Todo一覧取得API */
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
  // TODO: 外部APIリクエスト
  // await $fetch('http://localhost::8080', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept-Encoding': 'gzip',
  //     'Accept-Charset': 'utf-8',
  //     'Content-Encoding': 'gzip',
  //   },
  // })
  // throw createError({
  //   statusCode: 400,
  //   statusMessage: 'server request error',
  // })
})
