/** Todo削除API */
export default defineEventHandler((event) => {
  const mode = useRuntimeConfig()
  /** todo id */
  const id: number | undefined = event.context.params?.id
    ? parseInt(event.context.params.id)
    : undefined
  // 開発環境の場合
  if (mode.public.environment === 'development') {
    // バリデーション
    if (id === undefined || !Number.isInteger(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'bad request: required',
      })
    }
    setResponseStatus(event, 200)
  }
  // TODO: 外部API呼び出し
  return {}
})
