import { InsertTodoRequest } from '~/models/InsertTodoRequest'

/** Todo登録API */
export default defineEventHandler(async (event) => {
  const body = await readBody<InsertTodoRequest>(event)
  const mode = useRuntimeConfig()
  // 開発環境の場合
  if (mode.public.environment === 'development') {
    if (body.title === '') {
      throw createError({
        statusCode: 400,
        statusMessage: 'bad request: title required',
      })
    }
    setResponseStatus(event, 200)
  }
  // TODO: 外部API呼び出し
  return { body }
})
