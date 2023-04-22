import { Todo } from '~/models/Todo'

/** Todo取得API */
export default defineEventHandler((event) => {
  const mode = useRuntimeConfig()
  /** todo id */
  const id: number | undefined = event.context.params?.id
    ? parseInt(event.context.params.id)
    : undefined
  // 開発環境の場合
  if (mode.public.environment === 'development') {
    if (id === undefined || !Number.isInteger(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'bad request: required number id',
      })
    }
    const todo: Todo = {
      id,
      title: `task${id}`,
      detail: 'hoge',
      completed: false,
    }
    return todo
  }
  // TODO: 外部APIリクエスト
})
