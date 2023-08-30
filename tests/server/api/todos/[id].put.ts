import { UpdateTodoRequest } from '~/models/UpdateTodoRequest'

/** Todo更新API */
export default defineEventHandler(async (event) => {
  const body = await readBody<UpdateTodoRequest>(event)
  /** todo id */
  const id: number | undefined = event.context.params?.id
    ? parseInt(event.context.params.id)
    : undefined
  const mode = useRuntimeConfig()
  // 開発環境の場合
  if (mode.public.environment === 'development') {
    // バリデーション
    if (id === undefined || !Number.isInteger(id) || body.title === '') {
      throw createError({
        statusCode: 400,
        statusMessage: 'bad request: required',
      })
    }
    setResponseStatus(event, 200)
  }
  // TODO: 外部API呼び出し
  return { body }
})
