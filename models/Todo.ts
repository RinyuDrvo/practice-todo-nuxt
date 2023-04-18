/** Todoモデル */
export interface Todo {
  /** Todo id */
  id: number
  /** タイトル */
  title: string
  /** 完了状態 */
  completed: boolean
  /** 詳細 */
  detail: string
}
